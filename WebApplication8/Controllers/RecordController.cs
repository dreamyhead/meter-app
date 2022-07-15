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
    public class RecordController : ControllerBase
    {
        private Models.AppContext db = new Models.AppContext();

        [HttpGet("{meterId}&{dateRecord}")]
        public async Task<List<Record>> GetRecordsMeterId(int? meterId, string dateRecord) {
            var records = await db.Records.OrderBy(m => m.DateTime)
                .Where(m => m.MeterID == meterId && m.Date == dateRecord)
                .ToListAsync();
            return records;
        }
    }

}
