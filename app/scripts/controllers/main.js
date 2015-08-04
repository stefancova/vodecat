'use strict';

app.controller('MainCtrl', function ($scope, dataService) {

    $scope.bests = {};

    /**
     * getBestTrainings (10)
     */
    dataService.getBestTrainings(10).then(function (data) {
        console.log('getBestTrainings', data);
        $scope.bests = data;
    });

});
