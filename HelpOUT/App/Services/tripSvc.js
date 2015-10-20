helpOutModule.factory("tripSvc", ["$resource",
    function ($resource) {
        var currentTrips = $resource("/api/trip").get();
        var archivedTrips = $resource("/api/trip", { archivedTrips: true }).get();

        return {
            getCurrentTrips: function () {
                return currentTrips;
            },
            getArchivedTrips: function() {
                return archivedTrips;
            }
        }
    }
]);