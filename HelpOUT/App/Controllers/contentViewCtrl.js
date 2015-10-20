helpOutModule.controller("contentViewCtrl", ["$scope", "taskSvc", "$uibModal",
    function ($scope, taskSvc, $uibModal) {
        // PRIVATE PROPETIES
        var selectedTasks = [];
        


        // MODEL PROPERTIES
        $scope.sortOptions = ["Ascending", "Descending"];
        $scope.sortType = 'title'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.filters = { isComplete: false };


        // PRIVATE METHODS
        var removeFromTaskArray = function (array, task) {
            var index = array.indexOf(task);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

        // MODEL METHODS
         //when clicking create insid the create task modal
        $scope.createTask = function (title, time,date,comments) {
            console.log(title);
            $scope.task = {
            "title": "",
                "time": "",
            "date": "",
            "comments": "",
            "isComplete": "false"
            };
            
            date = document.getElementById("date").value;
            time = document.getElementById("time").value;
            $scope.task.title = title;
            $scope.task.date = date;
            $scope.task.time = time;
            $scope.task.comments = comments;
            taskSvc.postNewTask($scope.task);
            //location.reload();
            document.getElementById("taskForm").reset();
        };
        
        $scope.selectTask = function(task) {
            if (task.checked) {
                selectedTasks.push(task);
            } else {
                removeFromTaskArray(selectedTasks, task);
            }     
        }


        $scope.removeTask = function () {
            if (selectedTasks.length === 0) return;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'App/Templates/confirmationModal.html',
                controller: 'confirmationModalCtrl',
                resolve: {
                    action: function () {
                        return "delete";
                    },
                    objects: function() {
                        return "tasks";
                    }
                }
            });

            modalInstance.result.then(function() {
                selectedTasks.forEach(function (task) {
                    taskSvc.deleteTask(task.taskId).then(function () {
                        removeFromTaskArray($scope.tasks, task);
                        removeFromTaskArray(selectedTasks, task);//instead of removing from arrays we can just re(get) the tasks
                    }, function (err) {
                        // display friendly error message
                    });
                });
            });
        };

        $scope.markFinished = function () {
            if (selectedTasks.length === 0) return;
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'App/Templates/confirmationModal.html',
                controller: 'confirmationModalCtrl',
                resolve: {
                    action: function () {
                        return "mark as complete";
                    },
                    objects: function () {
                        return "tasks";
                    }
                }
            });

            modalInstance.result.then(function () {
                selectedTasks.forEach(function (task) {
                    task.isComplete = true;
                    delete task.checked;

                    taskSvc.updateTask(task).then(function () {
                        removeFromTaskArray($scope.tasks, task);
                        removeFromTaskArray(selectedTasks, task);
                    }, function (err) {
                        task.checked = true;
                        // display friendly error message
                    });
                });
            });
        };

        $scope.addToNewTrip = function () {
            if (selectedTasks.length === 0) return;
            selectedTasks.forEach(function (task) {
                // api PUT call to create/update new trip w/ selected tasks
            });
        };

        // CONTROLLER INITIALIZATION: get current (incompleted) tasks
        taskSvc.getAllTasks().then(function(response) {
            $scope.tasks = response.data;
        });
    }
]);