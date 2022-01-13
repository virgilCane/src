using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HootyHome.Domain.Events
{
    public class Event
    {
        public DateTime DueDate { get; set; }
        public DateTime DateCreated { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public List<Guid>? Participants { get; set; }
        public Guid Owner { get; set; }
    }
}
