/**
 * Provider is most verbose and most flexible. Configure factory not at hte time of use,
    but at the time of app bootstrapping.
    .config() function gets called before servcie, factory or controller is instantiated.
        therefore we can't inject any regular components into .config.
        We can inject the provider of the service with the name Provider.
        It will be configured only once in the beginning of the application.
 * Created by vishavvk on 1/14/17.
 */
(function() {
    'use strict';

    angular.module('serviceApp', [])
        .controller('ServiceController1', ServiceController1)
        .controller('ServiceController2', ServiceController2)
        .provider('ShoppingListService', ShoppingListServiceProvider)
        .config(Config);

    Config.$inject = ['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider) {
        // this will ensure that max items is limited to 2.
        // it does not matter what shoppnglistprovider defaults sets the item to.
        ShoppingListServiceProvider.defaults.maxItems = 2;
    }


    function ShoppingListServiceProvider() {
        var provider = this;

        provider.defaults = {
            maxItems: 10
        };

        provider.$get = function() {
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);
        }
    }

    ServiceController1.$inject = ['ShoppingListService'];
    function ServiceController1(ShoppingListFactory) {
        var ser1 = this;

        var shoppingList = ShoppingListService();
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