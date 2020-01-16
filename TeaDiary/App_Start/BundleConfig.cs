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

            registerPageSpecificBundles(bundles);
            registerSpecificBundles(bundles);

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/App/css").Include(
                "~/Content/App/*.css"));
        }

        private static void registerPageSpecificBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/Teas/Index").Include(
                        "~/Scripts/App/Teas/Index.js"));

            bundles.Add(new ScriptBundle("~/bundles/Teas/Details").Include(
                "~/Scripts/App/Teas/Details.js"));
            
            bundles.Add(new ScriptBundle("~/bundles/Search/Index").Include(
                    "~/Scripts/App/Search/Index.js"));

            bundles.Add(new ScriptBundle("~/bundles/Home/Index").Include(
                "~/Scripts/App/Home/Index.js"));
        }

        private static void registerSpecificBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/App/TeaSession").Include(
                "~/Scripts/App/TeaSession/*.js"));
        }

    }
}
