/**
 * Created by vishavvk on 1/12/17.
 */

(function(){

    var module1Solution = angular.module('module1Solution', []);

    Module1SolutionController.$inject = ['$scope'];
    function Module1SolutionController($scope) {
        $scope.itemsEatenForLunch = '';
        $scope.message = '';

        $scope.checkIfTooMuch = function() {
            if ($scope.itemsEatenForLunch.length < 1) {
                $scope.message = 'Please enter data first';
                return;
            }
          var items = $scope.itemsEatenForLunch.split(',');
          items = items.filter(function(item) {
              if (item.trim().length >= 1 && item != ' ') {
                  return item;
              }
          });

          if (items.length <= 3) {
              $scope.message = 'Enjoy!';
              return;
          }

          $scope.message = 'Too much!'

        };
    };

    module1Solution.controller('Module1SolutionController', Module1SolutionController);
})();