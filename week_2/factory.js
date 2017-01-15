/**
 * Created by vishavvk on 1/14/17.
 */
(function() {
    'use strict';

    angular.module('serviceApp', [])
        .controller('ServiceController1', ServiceController1)
        .controller('ServiceController2', ServiceController2)
        .factory('ShoppingListFactory', ShoppingListFactory);

    ServiceController1.$inject = ['ShoppingListFactory'];
    function ServiceController1(ShoppingListFactory) {
        var ser1 = this;

        var shoppingList = ShoppingListFactory(3);
        ser1.items = shoppingList.getItems();


        ser1.addItem = function(item, quantity) {
            shoppingList.addItem(quantity + ' of ' + item);
        };

        ser1.removeItem = function(itemIndex) {
            shoppingList.removeItem(itemIndex);
        };

    }

    ServiceController2.$inject = ['ShoppingListFactory'];
    function ServiceController2(ShoppingListFactory) {
        var ser2 = this;
        var shoppingList = ShoppingListFactory();
        ser2.items = shoppingList.getItems();

        ser2.addItem = function(item, quantity) {
            shoppingList.addItem(quantity + ' of ' + item);
        };

        ser2.removeItem = function(itemIndex) {
            shoppingList.removeItem(itemIndex);
        };
    }

    // Implementing Factory - Return a function
    // usage will be var someService = CustomService();
    // someService.method();
    function CustomService1() {
        var factory = function() {
           // return new SomeService();
        };

        return factory;
    }

    // Implementing Factory - return an object literal
    // usage will be var someService = CustomService2.getSomeService();
    // someService.method();
    function CustomService2() {
        var factory = {
            getSomeService: function() {
               // return new SomeService();
            }
        };
        return factory;
    }

    function ShoppingListFactory () {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems);
        }

        return factory;
    }

    function ShoppingListService() {
        var service = this;
        var items = [];
        service.addItems = function(item) {
            items.push(item);
        };

        service.getItems= function() {
            return items;
        };

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };
    }
})();