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
