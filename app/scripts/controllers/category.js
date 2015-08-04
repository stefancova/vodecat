'use strict';

app.controller('CategoryCtrl', function ($scope, $routeParams, dataService)  {

    $scope.trainings = {};
    $scope.category = '';
    $scope.numberOfTrainings;


    /**
     * getTrainingByCategory
     */
    dataService.getTrainingByCategory($routeParams.id).then(function (data) {

        console.log('ListCtrl:getTrainingByCategory', data);

        $scope.trainings = data;
        $scope.category = $routeParams.id;
        $scope.numberOfTrainings = data.length;
    });
});
