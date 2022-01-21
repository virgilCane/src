use [HootyHome]
Go

drop table if exists [dbo].[Users]
Go

create table Users(
    Id              int identity(1,1) primary key,
    [Name]          nvarchar(max) not null,
    Email           nvarchar(max) not null,
    Birthday        datetime,
    PasswordHash    nvarchar(max) not null,
    PasswordSalt    nvarchar(max) not null,
    DateCreated     datetime,
    [Events]        int not null,
    AddressId       int not null
    )
Go