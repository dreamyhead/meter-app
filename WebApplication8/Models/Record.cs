using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Models
{
    public class Record
    {
        public int Id { get; set; }
        public int MeterID { get; set; }

        [ForeignKey("MeterID")]
        public Meter Meter { get; set; }
        public string Date { get; set; } 
        [DataType(DataType.DateTime)]
        public DateTime LastDateTime { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateTime { get; set; }
        public double? ActiveReception { get; set; }
        public double? ActiveReturn { get; set; }
        public double? ReactiveReception { get; set; }
        public double? ReactiveReturn { get; set; }
    }
}
