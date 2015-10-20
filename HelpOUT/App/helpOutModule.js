var helpOutModule = angular.module("helpOutModule", ["ngRoute", "ui.bootstrap"]);

helpOutModule.config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "App/Templates/helpOut.html",
            controller: "helpOutCtrl"
        })
        .otherwise({
            templateUrl: "App/Templates/helpOut.html",
            controller: "helpOutCtrl"
        });
    }
]);