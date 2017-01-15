/**
 * Created by vishavvk on 1/11/17.
 */
(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstController', MyFirstController)
        .filter('custom', CustomFilterFactory);

    MyFirstController.$inject = ['$scope', 'customFilter'];
    function MyFirstController($scope, customFilter) {

        $scope.onceCounter = 0;

        $scope.showNumberOfWatchers = function() {
          console.log('# of watchers: ', $scope.$$watchersCount);
        };

        $scope.countOnce = function() {
          $scope.onceCounter = 1;
        };

        // $scope.$watch('onceCounter', function(newValue, oldValue){
        //     console.log('old value: ', oldValue);
        //     console.log('new Value:', newValue);
        // }) ;

        /**
         * Digest loop fires atleast 2 times, once when the value changes
         * and next time to check if anything else has changed.
         */
        $scope.$watch(function() {
           console.log('Digest Loop Fired!');
        });
    }

    function CustomFilterFactory() {
      return function (input, arg1, arg2) {
          return input + arg1 + arg2;
      };
    }
})();