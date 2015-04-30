angular.module('starter')
    .controller('ContactsCtrl', function ($scope, ContactsService, $ionicLoading) {
        $scope.contacts = [];

        $ionicLoading.show({
            template: '<ion-spinner icon="spiral"></ion-spinner><br />Loading...'
        });

        ContactsService.GetContacts()
            .then(function(items){
            $scope.contacts = items;
            console.log(items);
        }).finally(function(){
                $ionicLoading.hide();
            });

        $scope.doRefresh = function () {
            ContactsService.GetNewContact().then(function(item){
                $scope.contacts = $scope.contacts.concat(item);
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            })
        };
    });