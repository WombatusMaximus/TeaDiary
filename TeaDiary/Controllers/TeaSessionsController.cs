using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TeaDiary.Controllers
{
    public class TeaSessionsController : Controller
    {
        // GET: TeaSessions
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Details(int id)
        {
            return View("~/Views/TeaSessions/Details.cshtml", id);
        }
    }
}