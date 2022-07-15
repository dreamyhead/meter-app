using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication8.Models;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Threading;

namespace WebApplication8
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (Models.AppContext db = new Models.AppContext())
            {
                db.Database.EnsureDeleted();
                db.Database.EnsureCreated();

                Random rnd = new Random();
                CultureInfo originalCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("nl-NL");

                List<Meter> meters = new List<Meter>();

                for (int i = 1; i <= 10; i++)
                {
                    Meter meter = new Meter { Name = $"Meter-{i}" };
                    meters.Add(meter);
                    db.Meters.Add(meter);
                }

                foreach (var item in meters)
                {
                    DateTime dateTime = new DateTime(2022, 7, 10, 00, 00, 00);
                    for (int i = 0; i < System.DateTime.DaysInMonth(dateTime.Year, dateTime.Month); i++)
                    {
                        for (int j = 0; j < 48; j++)
                        {
                            Record record = new Record
                            {
                                Meter = item,
                                Date = dateTime.ToString("yyyy/MM/dd"),
                                DateTime = dateTime.AddMinutes(30),
                                LastDateTime = dateTime,
                                ActiveReception = Math.Round(rnd.NextDouble() * 10000, 2),
                                ActiveReturn = Math.Round(rnd.NextDouble() * 10000, 2),
                                ReactiveReception = Math.Round(rnd.NextDouble() * 10000, 2),
                                ReactiveReturn = Math.Round(rnd.NextDouble() * 10000, 2)
                            };
                            dateTime = dateTime.AddMinutes(30);
                            db.Records.AddRange(record);
                        }
                    }
                }
                
                db.SaveChanges();
            }
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
