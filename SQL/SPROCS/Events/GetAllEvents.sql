Grant Exec to public
Go
Use [HootyHome]
Go
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

drop procedure if exists GetEvents
go
CREATE PROCEDURE [dbo].[GetEvents]
        (
        @month              int              = null,
        @exactDateDue       datetime         = null,
        @Owner              int              = null 
        )
AS
  declare @events table
        ( [Id]              int,
          [Name]            nvarchar(max),
          [Description]     nvarchar(max),
          DueDate           datetime,
          DateCreated       datetime,
          [Owner]           int)

  insert @events
       (  [Id],
          [Name],
          [Description],
          [DueDate],
          [DateCreated],
          [Owner] )
  select  evt.Id,
          evt.[Name],
          evt.[Description],
          evt.DueDate,
          evt.DateCreated,
          evu.UserId  as [Owner]
    from Events evt
      left join EventsUsers evu
        on evt.Id = evu.EventId
  where evu.isOwner = 1

  select [Id],
         [Name],
         [Description],
         [DueDate],
         [DateCreated],
         [Owner]
    from @events evt
  where 1 = case
              when coalesce(@owner,-1) = -1       then 1
              when coalesce(@Owner,0) = [Owner] then 1
              else 0
            end
    and 1 = case
              when ISNULL(@exactDateDue, 1) = 1 then 1
              when @exactDateDue = DueDate then 1
              else 0
            end
    and 1 = case
              when ISNULL(@month, -1) = -1 then 1
              when coalesce(@month, -1) = MONTH(evt.DueDate) then 1
              else 0
            end

Go


--exec GetEvents @Owner = '1', @month = '1', @exactDateDue = "2022-01-18 08:27:23.420"
