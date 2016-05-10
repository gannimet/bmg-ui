(function(angular) {
    'use strict';

    angular.module('bmg-ui.docs')
        .controller('XEditableController', XEditableController);

    XEditableController.$inject = ['$filter'];

    function XEditableController($filter) {

        this.site = {
            value: 2
        };
        this.data = {
            'sites' : [
                {value: 1, text: 'BMG Rights Management UK'},
                {value: 2, text: 'BMG Rights Management GE'},
                {value: 3, text: 'BMG Rights Management US'}
            ],
            'barcode' : '5016027101519',
            'productCode' : 'BFFP151',
            'altProductCode' : '',
            'artistName': 'The Merry Pranksters',
            'title': 'Peggy the Pistol/Hogs Are a Coming'
        };

        this.showSites = function() {
            var selected = $filter('filter')(this.data.sites, {value: this.site.value});
            return (this.site.value && selected.length) ? selected[0].text : 'Not set';
        };
    }

})(angular);