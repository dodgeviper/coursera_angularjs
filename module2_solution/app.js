/**
 * Created by vishavvk on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.checkOff = function(itemIdex) {
            ShoppingListCheckOffService.checkOff(itemIdex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "biscuits", quantity: 12 },
            { name: "soda", quantity: 1 },
            { name: "cake", quantity: 2 }
        ];
        service.itemsAlreadyBought = [];

        service.getItemsToBuy = function() {
            return service.itemsToBuy;
        }

        service.getItemsAlreadyBought = function() {
            return service.itemsAlreadyBought;
        }

        service.checkOff = function(itemIndex) {
            service.itemsAlreadyBought.push(service.itemsToBuy.splice(itemIndex, 1)[0]);
        }

        return service;
    }
})();