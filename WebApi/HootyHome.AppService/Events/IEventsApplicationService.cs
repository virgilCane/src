using HootyHome.Domain.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HootyHome.AppService.Events
{
    public interface IEventsApplicationService
    {
        public List<Event> GetEvents();
    }
}
