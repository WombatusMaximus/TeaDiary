using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TeaDiary.api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Tea Diary";

            return View();
        }

        public ActionResult Tea(int id)
        {
            return View("~/Views/Tea/GetById.cshtml", id);
        }

        public ActionResult Teas()
        {
            return View("~/Views/Tea/GetAll.cshtml");
        }

        public ActionResult AddTea()
        {
            return View("~/Views/Tea/Add.cshtml");
        }

        public ActionResult Search()
        {
            return View("~/Views/Tea/Search.cshtml");
        }
    }
}
