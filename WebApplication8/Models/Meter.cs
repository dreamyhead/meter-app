using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Models
{
    public class Meter
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public List<Record> Records { get; set; } = new List<Record>();
    }
}
