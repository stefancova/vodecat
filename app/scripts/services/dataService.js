/* Data Services */
'use strict';


angular.module('clientApp').factory('dataService', ['$http',  function($http) {

    return {
        getData: function(){
            return $http.get('data/catalogue.json',{ cache: true });
        },

        getCatalog: function(){
            return this.getData().then(function(result){
                return result.data.data.formations;
            });
        },

        getCategories: function(){
            return this.getCatalog().then(function(result){
                return _.groupBy(result, 'fulltopic');
            });
        },

        getTrainingByCategory: function(fulltopic){
            return this.getCatalog().then(function(result){
                return _.where(result, {fulltopic: fulltopic });
            });
        },

        getBestTrainings: function(int){
            return this.getCatalog().then(function(result){
                return _.sample(result, int);
            });
        },

        getTrainingById: function(id){
            return this.getCatalog().then(function(result){
                return _.findWhere(result, {vodeclic_id: id });
            });
        },

        getTrainingLike: function(title){
            return this.getCatalog().then(function(result){
                return _.filter(result, function(training){
                    return training.title.indexOf(title)>=0;
                });
            });
        }
    };
}]);

