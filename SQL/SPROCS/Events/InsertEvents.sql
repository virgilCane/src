grant exec to public
go
Use [HootyHome]
Go
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
drop procedure if exists InsertEvent
go
create procedure InsertEvent
    ( @Name          nvarchar(max),
      @Description   nvarchar(max) = null,
      @DueDate       datetime      = null,
      @Owner         int,
      @Id            int           output)
as
  begin tran
  declare @output table
        (Id int)
  declare @message nvarchar(max)

  declare @eventsUsersId int

  insert EventsUsers(
         UserId,
         isOwner
         )
  select @Owner,
         1
  select @eventsUsersId = @@IDENTITY

  insert Events(
         [Name],
         [Description],
         DueDate,
         DateCreated,
         EventUsers)
  output inserted.Id into @output(Id)
  select @Name,
         @Description,
         @DueDate,
         GETDATE(),
         @eventsUsersId

  select @Id = Id
  from @output

  Update EventsUsers
    Set EventId = @Id



 if (@@rowcount <> 1 or @@error <> 0)
  begin
    select @message = concat('Error inserting event:', @Name, ' (InsertEvent)')
    raiserror(@message, 16, 1)
    rollback tran
    return 1;
  end
  commit tran
  go

/* declare @Id int
  exec InsertEvent @Name = 'Polish taps', @Description = 'You must polish the Polish taps with Polish polish', @DueDate = '2022/10/12', @Owner='2', @Id = @Id output

  select @Id


  select * from Events 
  where ID = @Id
  */