using System.Web;
using System.Web.Optimization;

namespace TeaDiary.api
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/application").Include(
                "~/Scripts/App/*.js"));

            bundles.Add(new ScriptBundle("~/bundles/Tea/GetAll").Include(
                "~/Scripts/App/Tea/GetAll.js"));

            bundles.Add(new ScriptBundle("~/bundles/Tea/Get").Include(
                "~/Scripts/App/Tea/GetById.js"));

            bundles.Add(new ScriptBundle("~/bundles/Tea/Add").Include(
                "~/Scripts/App/Tea/Add.js"));

            bundles.Add(new ScriptBundle("~/bundles/Tea/Search").Include(
                "~/Scripts/App/Tea/Search.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
