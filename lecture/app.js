/**
 * Created by vishavvk on 1/11/17.
 */
(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstController', function ($scope) {
            $scope.name = 'Vishav';
        });
})();