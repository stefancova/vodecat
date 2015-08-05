'use strict';

app.controller('headerCtrl', function ($scope, dataService, config) {

    $scope.categories = {};

    // Get categories
    dataService.getCategories().then(function (data) {
        if (config.debug) {
            console.log('headerCtrl:data', data);
        }

        $scope.categories = data;
    });


});
