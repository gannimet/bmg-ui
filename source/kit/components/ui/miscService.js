(function(undefined) {
    'use strict';

    angular
        .module('bmg.components.ui')
        .factory('miscService', miscService);

    function miscService() {
        return {
            isPromise: isPromise
        };

        function isPromise(promise) {
            // if it looks like a promise and walks like a promise …
            return angular.isDefined(promise) &&
                angular.isDefined(promise.then) &&
                angular.isFunction(promise.then);
        }
    }
})();
