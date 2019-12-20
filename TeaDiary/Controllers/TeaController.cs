using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeaDiary.business.Values;
using TeaDiary.domain.Models;

namespace TeaDiary.api.Controllers
{
    [RoutePrefix("api/tea")]
    public class TeaController : ApiController
    {
        private readonly ITeaGetter teaGetter;
        private readonly ITeaUpdater teaUpdater;
        
        public TeaController(ITeaGetter teaGetter, ITeaUpdater teaUpdater)
        {
            this.teaGetter = teaGetter;
            this.teaUpdater = teaUpdater;
        }

        // GET api/tea
        public IEnumerable<Tea> Get()
        {
            return teaGetter.GetAll();
        }

        // GET api/tea/5
        public Tea Get(int id)
        {
            return teaGetter.GetByID(id);
        }
        
        [Route("SearchByName")]
        [HttpGet]
        public IList<Tea> SearchByName(string teaName, bool isStrictSearch = true)
        {
            return teaGetter.GetByName(teaName,isStrictSearch);
        }

        [Route("SearchByType")]
        [HttpGet]
        public IList<Tea> SearchByType(string teaType, bool isStrictSearch = true)
        {
            return teaGetter.GetByType(teaType,isStrictSearch);
        }

        // POST api/tea
        public int Post([FromBody]Tea tea)
        {
            return teaUpdater.Create(tea);
        }

        // PUT api/tea/
        public bool Put([FromBody]Tea tea)
        {
            return teaUpdater.Update(tea);
        }

        // DELETE api/tea/5
        public bool Delete(int id)
        {
            return teaUpdater.Delete(id);
        }
    }
}
