'use strict';

angular.module('insight.simple')
  .factory('Simple',
    function($resource, Api) {
      return $resource(Api.apiPrefix + '/simple');
    });
