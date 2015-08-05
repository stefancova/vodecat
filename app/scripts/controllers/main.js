'use strict';

app.controller('HomeCtrl', function ($scope, dataService, config) {

    $scope.bests = {};

    /**
     * getBestTrainings (10)
     */
    dataService.getBestTrainings(10).then(function (data) {
        if (config.debug) {
            console.log('getBestTrainings', data);
        }

        $scope.bests = data;
    });

});
