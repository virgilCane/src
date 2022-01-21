--Mock Seed Data

use HootyHome
go
begin tran
--Address
insert into dbo.Addresses
    values(
            '12 bew way',
            '7405')
--Users
insert into dbo.Users
    values(
            'Greg Stones',
            'gregstones@gmail.com',
            GETDATE(),
            'Feefi',
            'FooFum',
            GetDate(),
            1,
            1)
insert into dbo.Users
    values(
            'Maxwell Irontoe',
            'max@mustacheimporium.co.za',
            GETDATE(),
            'Feefi',
            'FooFum',
            GetDate(),
            1,
            1)
--Events
insert into dbo.Events
    values( 'Sweep floors',
            'Sweep kitchen, hallway and bathroom. Everyone is responsible for keeping their own room tidy',
            GetDate(),
            GETDATE(),
            1)
--EventsUsers
insert into EventsUsers
    values(1,
           1,
           1)
insert into EventsUsers
    values(1,
           2,
           0)

rollback tran
--commit tran
-- select * from EventsUsers