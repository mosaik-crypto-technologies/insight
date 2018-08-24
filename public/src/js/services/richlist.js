'use strict';

angular.module('insight.richlist')
    .factory('Richlist',
    function($resource, Api) {
    return $resource(Api.apiPrefix + '/richlist');
    });
