using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeaDiary.domain.Models;

namespace TeaDiary.Api_Controllers
{
    [RoutePrefix("api/teaSession")]
    public class TeaSessionController : ApiController
    {
        IList<TeaSession> teaSessions = new List<TeaSession>
        {
            new TeaSession
            {
                Id = 1,
                User = null,
                UserId = 1,
                Date = new DateTime(2020,1,1),
                Duration = new TimeSpan(2,0,0),
                Participants = new List<string>
                {
                    "Биба",
                    "Боба"
                },
                Notes = "Чёт пили. Было вкусно",
                Teas = null
            },
            new TeaSession
            {
                Id = 2,
                User = null,
                UserId = 1,
                Date = new DateTime(2020,1,1),
                Duration = new TimeSpan(2,0,0),
                Participants = new List<string>
                {
                    "Ты",
                    "Я",
                    "Мы с тобой"
                },
                Notes = "Пьянствовали по полной",
                Teas = null
            },
        };
        // GET: api/TeaSession
        public IEnumerable<TeaSession> Get()
        {
            return teaSessions;
        }

        // GET: api/TeaSession/5
        public TeaSession Get(int id)
        {
            if (id <= teaSessions.Count)
            {
                return teaSessions[id-1];
            }
            return null;
        }

        // POST: api/TeaSession
        public int Post([FromBody]TeaSession teaSession)
        {
            return 2;
        }

        // PUT: api/TeaSession/5
        public bool Put(int id, [FromBody]TeaSession teaSession)
        {
            return false;
        }

        // DELETE: api/TeaSession/5
        public bool Delete(int id)
        {
            return false;
        }
    }
}
