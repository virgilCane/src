use [HootyHome]
Go

drop table if exists [dbo].[EventsUsers]
Go

create table EventsUsers(
            Id      int identity(1,1) primary key,
            EventId int,
            UserId  int,
            isOwner bit
            )
Go