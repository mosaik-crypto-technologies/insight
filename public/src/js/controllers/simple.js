'use strict';

angular.module('insight.simple').controller('SimpleController',
  function($scope, $routeParams, Simple) {

    $scope.getSimple = function() {
      Simple.get({},
      function(result) {
        $scope.simple = {value: result.value};
      },
      function(e) {
        $scope.simple = {value: 40};
      })
    };
  });
