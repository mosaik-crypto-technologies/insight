'use strict';

angular.module('insight.supply')
  .factory('TotalSupply',
    function($resource, Api) {
      return $resource(Api.apiPrefix + '/totalSupply');
    })
  .factory('CirculatingSupply',
    function($resource, Api) {
      return $resource(Api.apiPrefix + '/circulatingSupply');
    });
