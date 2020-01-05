using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TeaDiary.api.Models;

namespace TeaDiary.Controllers
{
    public class TeasController : Controller
    {
        // GET: Tea
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult Create()
        {
            return View("~/Views/Teas/Details.cshtml", new DisplayTeaViewModel(null));
        }

        public ActionResult Details(int id)
        {
            return View("~/Views/Teas/Details.cshtml", new DisplayTeaViewModel (id));
        }
    }
}
