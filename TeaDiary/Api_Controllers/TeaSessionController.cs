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
                Date = new DateTime(2019,1,1),
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
            new TeaSession
            {
                Id = 3,
                User = null,
                UserId = 1,
                Date = new DateTime(2020,1,1),
                Duration = new TimeSpan(2,0,0),
                Participants = new List<string>
                {
                    "Сумеречная искорка",
                    "Радуга Дэш",
                    "Рарити",
                    "Флаттершай",
                    "Пинки Пай",
                    "Эпплджек"
                },
                Notes = "Давным-давно Эквестрией, где вместе жили земные пони, пегасы и единороги, правили две сестры. Старшая сестра управляла солнцем, а младшая — луной. Однажды младшая сестра отказалась уступить место старшей, чуть не погрузив мир в вечный мрак. Тогда старшей сестре пришлось применить магию шести Элементов Гармонии, чтобы изгнать её на луну. С тех пор старшая сестра стала управлять и солнцем, и луной. Но спустя тысячу лет младшая сестра вернулась в праздник летнего солнцестояния, а старшая исчезла. Теперь ночь будет длиться вечно",
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
