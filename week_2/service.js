/**
 * Created by vishavvk on 1/14/17.
 */
(function() {
    'use strict';

    angular.module('serviceApp', [])
        .controller('ServiceController1', ServiceController1)
        .controller('ServiceController2', ServiceController2)
        .service('CustomService', CustomService);

    ServiceController1.$inject = ['CustomService'];
    function ServiceController1(CustomService) {
        var ser1 = this;

        ser1.addItem = function(item, quantity) {
            CustomService.addItem(quantity + ' of ' + item);
        };

    }

    ServiceController2.$inject = ['CustomService'];
    function ServiceController2(CustomService) {
        var ser2 = this;

        ser2.items = CustomService.getItems();

        ser2.removeItem = function(itemIndex) {
            CustomService.removeItem(itemIndex);
        }
    }

    function CustomService() {
        var service = this;

        var items = [];

        service.addItem = function(item){
            items.push(item);
        };

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getItems = function() {
            return items;
        };
    }
})();