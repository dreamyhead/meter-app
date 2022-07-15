using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication8.Models
{
    public class AppContext : DbContext
    {
        public DbSet<Record> Records { get; set; } = null!;
        public DbSet<Meter> Meters { get; set; } = null!;
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=db/helloapp.db");
        }
    }
}
