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
        @Owner              uniqueIdentifier = null,
        @DueDate            datetime         = null
        )
AS
declare @events table
       (
         DueDate        datetime,
         DateCreated    datetime,
         [Name]         nvarchar(max),
         [Description]  nvarchar(max),
         [Owner]        uniqueIdentifier
       )

Insert Into @events
       values(GETDATE(), GETDATE(), 'Wash Dishes', 'The Dishes must be washed', NEWID())

select DueDate,
       DateCreated,
       [Name],
       [Description],
       [Owner]
    from @events
Go


--exec GetEvents @Owner = "06511AE0-1602-4D28-A8EF-4BB41E23C00A", @DueDate = "2022-01-13 08:08:26.330"
