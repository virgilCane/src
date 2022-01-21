use [HootyHome]
Go

drop table if exists [dbo].[Addresses]
Go

create table Addresses(
    Id           int identity(1,1) primary key,
    [Address]    nvarchar(max) not null,
    PostCode     nvarchar(max)
    )
Go