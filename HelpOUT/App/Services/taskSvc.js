helpOutModule.factory("taskSvc", ["$http",
    function ($http) {
        var baseURL = 'https://api.mongolab.com/api/1/databases/helpout/collections/tasks';
        return {
            getAllTasks: function () {//gets all the tasks existing
                return $http.get(baseURL + '?apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V');
            },
            getCurrentTasks: function() {//gets the incompleted tasks only
                return $http.get(baseURL+'?q={"isComplete":"false"}&apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V');
            },
            getArchivedTasks: function() {//gets the completed tasks
                return $http.get(baseURL + '?q={"isComplete":"true"}&apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V');
            },
            updateTask: function(task) {//update a certain task
                return $http.post(baseURL + '?apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V', task);
            },
            deleteTask: function(taskId) {//deletes the task with the id (taskId) (insted of using taskId which we create! we should use $oid created by mongoDB
                return $http.delete(baseURL + '?q={"taskId":"taskId"}&apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V');
            },
            postNewTask: function (task) {
                return $http.post(baseURL + '?apiKey=XQzdrOK0PALzMTwUCxE4x3x3CUQvIb_V', task);
            }
        }
    }
]);