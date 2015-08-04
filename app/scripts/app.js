'use strict';

// Redirect # to #! (because QR codes url are like this http://www.lg-economie-energie.com/#/liste-produits/LGGC5629PS)
var hash = window.location.hash;
if ( hash.indexOf('#/') > -1) {
    window.location.hash = hash.replace('#','#!');
}

// Define app
var app = angular.module('clientApp', ['ngResource', 'ngSanitize', 'ngRoute', 'menuMobile']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
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

    $locationProvider.html5Mode(false).hashPrefix('!');
});

