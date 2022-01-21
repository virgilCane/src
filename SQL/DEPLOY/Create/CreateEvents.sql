use [HootyHome]
Go

Drop table if exists [dbo].[Events]
Go

Create table Events(
    Id                   int identity(1,1) primary key,
    [Name]               nvarchar(max) not null,
    [Description]        nvarchar(max),
    DueDate              datetime,
    DateCreated          datetime,
    EventUsers           int not null 
    )
Go

