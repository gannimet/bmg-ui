(function(angular) {
    'use strict';

    angular.module('bmg-ui.docs')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal', '$log'];

    function ModalController($uibModal, $log) {
        this.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/templates/mySimpleModal.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });

            modalInstance.result.then(function () {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        this.openSlideModal1 = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/templates/myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });

            modalInstance.result.then(function () {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        this.openSlideModal2 = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/templates/myModalContentWithAForm.html',
                controller: 'ModalInstanceCtrl',
                size: 'lg'
            });

            modalInstance.result.then(function () {}, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

})(angular);
