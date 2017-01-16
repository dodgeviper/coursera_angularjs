/**
 * Created by vishavvk on 1/16/17.
 */
(function() {
    'use strict';

    angular.module('resourceApp', ['ngResource'])
        .controller('ResourceController', ResourceController)
        .service('ResourceService', ResourceService);

    ResourceController.$inject = ['ResourceService'];
    function ResourceController(ResourceService) {
        var rsCtrl = this;
        rsCtrl.init = function() {
            console.log(ResourceService.getIdeaList().getIdeaList());
           // console.log(ResourceService.getIdeaDetails().getIdeaDetails({ideaId: '1231231'}));
        }

        rsCtrl.getIdeaDetails = function() {
            console.log(ResourceService.getIdeaDetails().getIdeaDetails({'ideaId': '1231231'}));
        }

        rsCtrl.init();
    }

    ResourceService.$inject = ['$resource']
    function ResourceService($resource) {
        var service = this;

        service.getIdeaList = function() {
            return $resource('/ideas/', {}, {
               getIdeaList: {
                   method: 'GET',
                   url: '/ideas/recent'
               }
            });
        }

        service.getIdeaDetails = function() {
            return $resource('/ideas/', {}, {
                getIdeaDetails: {
                    method: 'GET',
                    url: '/ideas/get/:ideaId',
                }
            });
        }

        return service;
    }
})();