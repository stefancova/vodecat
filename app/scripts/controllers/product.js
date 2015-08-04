'use strict';

app.controller('ProductCtrl', function ($scope, $routeParams, $location, dataService) {

    $scope.product = {};
    $scope.category = {};
    $scope.otherProducts = {};
    $scope.titleLike = '';


    /**
     * getTrainingById
     */
    var promise = dataService.getTrainingById($routeParams.id).then(function (data) {
        console.log('ProductCtrl:getTrainingById', data);
        $scope.product = data;
    });

    promise.then(function(){
        $scope.titleLike = $scope.product.title.split(' ')[0];

        /**
         * getTrainingLike
         */
        dataService.getTrainingLike($scope.titleLike).then(function (data) {
            console.log('ProductCtrl:getTrainingLike', data);
            $scope.otherProducts = data;
        });
    });

});
