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
