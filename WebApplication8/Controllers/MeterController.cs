using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication8.Models;

namespace WebApplication8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeterController : ControllerBase
    {
        private Models.AppContext db = new Models.AppContext();

        [HttpGet("")]
        public async Task<List<Meter>> GetMeters()
        {
            var meters = await db.Meters.ToListAsync();
            return meters;
        }
    }
}
