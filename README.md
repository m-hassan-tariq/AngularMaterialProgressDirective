# Angular Material Progress Directive
Custom Angular Material circular progress directive and its usage through service

Customize Angular loader service, register within your controller and other data services and use it throughout your project. I have consolidated it through directive and service in-order to overcome boilerplate code. 

Angular Code:

    (function () {
        'use strict';
    
        var app = angular.module('app', ['ngMaterial']);
    
        app.controller('progressController', function (loaderService) {
    
            var vm = this;
            
            vm.showLoader = loaderService.getLoaderValue();
    
            vm.show = function () {
                vm.showLoader = loaderService.showLoader();
            };
    
            vm.hide = function () {
                vm.showLoader = loaderService.hideLoader();
            };
        });
    
    })();

Angular HTML Code:

    <div loader></div>

Loader Service:

    (function () {
        'use strict';
    
        angular
            .module('app')
            .factory('loaderService', loaderService);
    
        loaderService.$inject = [];
    
        function loaderService() {
    
            var loaderStatus = "";
    
            var service = {
                showLoader: showLoader,
                hideLoader: hideLoader,
                getLoaderValue: getLoaderValue
            };
    
            return service;
    
            ////////////////////////////Implementation//////////////////////////////////////
    
            function showLoader() {
                loaderStatus = "indeterminate";
                return loaderStatus;
            }
    
            function hideLoader() {
                loaderStatus = "";
                return loaderStatus;
            }
    
            function getLoaderValue() {
                return loaderStatus;
            }
        }
    
    })();

Loader Directive:

    (function () {
        'use strict';
    
        angular
            .module('app')
            .directive('loader', loader);
    
        function loader() {
            var directive = {
                restrict: 'EA',
                templateUrl: '/scripts/app/loaderDirective.html',
            };
    
            return directive;
        }
    
        loaderController.$inject = [];
    
        function loaderController() {
    
            var vm = this;
    
            init();
    
            /////////////////////Implementation///////////////////////////////
    
            function init() {
               
            }
        }
    
    })();

Loader Directive Html:

    <div layout="row" layout-sm="column" layout-align="space-around">
        <md-progress-circular md-mode="{{vm.showLoader}}"></md-progress-circular>
    </div>

Output:

![screenshot_3](https://cloud.githubusercontent.com/assets/10474169/13370563/4c3c9cf4-dcd1-11e5-9fa6-b57c9a8b8fa8.png)
