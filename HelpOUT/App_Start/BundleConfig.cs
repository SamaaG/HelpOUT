using System.Web.Optimization;

namespace HelpOUT
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/helpOutDependencies").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js"));

            bundles.Add(new ScriptBundle("~/bundles/helpOut").Include(
                "~/App/helpOutModule.js",
                "~/App/Controllers/helpOutCtrl.js",
                "~/App/Controllers/navViewCtrl.js",
                "~/App/Controllers/contentViewCtrl.js",
                "~/App/Controllers/confirmationModalCtrl.js",
                "~/App/Services/taskSvc.js",
                "~/App/Services/tripSvc.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css"));
        }
    }
}
