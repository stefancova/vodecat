'use strict';

// Define app
var app = angular.module('clientApp', ['ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'menuMobile']);

// Router config
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/formations/:id', {
            templateUrl: 'views/category.html',
            controller: 'CategoryCtrl'
        })
        .when('/formation/:id', {
            templateUrl: 'views/product.html',
            controller: 'ProductCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Constant config
app.constant('config', {
    debug: false
});


