'use strict';

angular.module('insight.simple').controller('SimpleController',
  function($scope, $routeParams) {

    $scope.getSimple = function() {
      $scope.simple = {value: 50};
    };
  });
