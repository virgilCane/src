using Dapper;
using HootyHome.Domain.Events;
using HootyHome.Infrastructure.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HootyHome.AppService.Events
{
  public class EventsApplicationService
  {
    private readonly GenericRepo _eventsRepo;  
    
    public EventsApplicationService(GenericRepo eventsRepo)
    {
      _eventsRepo = eventsRepo;
    }
    public async Task<List<Event>> GetEvents(int? month, DateTime? exactDateDue)
    {
      try
      {
        var parms = new DynamicParameters();
        parms.Add("month", month);
        parms.Add("exactDateDue", exactDateDue);
        var events = await _eventsRepo.QueryAsync<Event>("GetEvents", parms);
        return events.ToList();
      }catch(Exception e)
      {
        //Todo: Implement error logging/handling
        return default;
      }
  
    }

    public async Task<bool> AddEvent(Event dateEvent)
    {
      try
      {
        var eventId = await _eventsRepo.ExecuteAsync(dateEvent,"AddEvent");
        //Insert List into SQL
        //https://stackoverflow.com/questions/17150542/how-to-insert-a-c-sharp-list-to-database-using-dapper-net
        //vs ??
        //Passing List/array to SPROC:
        //https://stackoverflow.com/questions/11102358/how-to-pass-an-array-into-a-sql-server-stored-procedure
        //Insert Participants here

        return (eventId  != 0) ? true : false;
      }
      catch (Exception e)
      {
        //TODO: Implement error logging/handling
        return default;
      }
    }
  }
}
