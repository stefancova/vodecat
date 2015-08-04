'use strict';

app.controller('headerCtrl', function ($scope, dataService) {

    $scope.categories = {};

    // Get categories
    dataService.getCategories().then(function (data) {
        console.log('headerCtrl:data', data);
        $scope.categories = data;
    });


});
