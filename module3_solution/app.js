/**
 * Created by vishavvk on 1/22/17.
 */

'use strict';
(function(){

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);


    function FoundItems() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            transclude: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narCtrl = this;

        narCtrl.found = [];

        narCtrl.error = '';


        narCtrl.searchItems = function(searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function(items) {
               narCtrl.found = items;
               narCtrl.error = items.length ? '' : 'Nothing found!';
            });
        };

        narCtrl.removeItem = function(itemIndex) {
          narCtrl.found.splice(itemIndex, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
                .then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter(function(item) {
                    return item.description.indexOf(searchTerm) != -1;
                });

                // return processed items
                return foundItems;
            });
        };

        return service;
    }
})();