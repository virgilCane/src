if (db_id(N'HootyHome') is null)
begin
  create database HootyHome
  collate Latin1_General_CI_AS;
end
go
