'use strict';

angular.module('insight.simple').controller('SimpleController',
  function($scope, $routeParams, Simple) {

    $scope.getSimple = function() {
      Simple.get({},
      function(d) {
        $scope.simple = {value: 50};
      },
      function(e) {
        $scope.simple = {value: 40};
      })
    };
  });
