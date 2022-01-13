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
    public async Task<List<Event>> GetEvents()
    {
      try
      {
        DynamicParameters parms = new DynamicParameters();
        //parms.Add("Owner", "Milo Minderbinder");
        //parms.Add("DueDate", new DateTime());
        var events = (await _eventsRepo.QueryAsync<Event>("GetEvents", parms));
        return events.ToList();
      }catch(Exception e)
      {
        //Todo: Implement error logging/handling
        return default;
      }
  
    }
  }
}
