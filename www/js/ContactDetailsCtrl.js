angular.module('starter')
    .controller('ContactDetailsCtrl', function ($scope, $stateParams, ContactsService) {
        var index = $stateParams.index;

        $scope.contact = ContactsService.GetContact(index);
    });