using HootyHome.AppService.Events;
using HootyHome.Domain.Events;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Homely.WebApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EventsController : ControllerBase
  {
    private readonly EventsApplicationService _eventsService;

    public EventsController(EventsApplicationService eventsService)
    {
      _eventsService = eventsService;
    }
    // GET: api/<ValuesController1>
    [HttpGet]
    public async Task<IActionResult> Get(int? month, DateTime? dueDate)
    {
      var events = await _eventsService.GetEvents(month, dueDate);
      return Ok(events);
    }

    // GET api/<ValuesController1>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/<ValuesController1>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Event dateEvent)
    {
      var eventAdded = await _eventsService.AddEvent(dateEvent);
      if (eventAdded)
        return Ok();
      return BadRequest();
    }

    // PUT api/<ValuesController1>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<ValuesController1>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
