using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TeaDiary.domain.Models;

namespace TeaDiary.api.Controllers
{
    public class TeaController : ApiController
    {


        // GET /tea
        public IEnumerable<Tea> Get()
        {
            return new Tea[] { new Tea() };

            
        }

        // GET /tea/5
        public Tea Get(int id)
        {
            return new Tea();
        }

        // POST /tea
        public void Post([FromBody]string value)
        {
        }

        // PUT /tea/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE /tea/5
        public void Delete(int id)
        {
        }
    }
}
