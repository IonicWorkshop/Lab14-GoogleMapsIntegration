angular.module('starter')
    .controller('ContactDetailsCtrl',
        function ($scope,
            $stateParams,
            ContactsService,
            uiGmapIsReady,
            uiGmapGoogleMapApi,
            GeolocationService,
            $timeout)
        {
        var index = $stateParams.index;

        $scope.contact = ContactsService.GetContact(index);
            $scope.map = {
                zoom: 10,
                center: GeolocationService.getDefaultPosition(),
                control: {}
            };

            // Main map object for this view
        uiGmapGoogleMapApi.then(function(maps) {
            var address = $scope.contact.user.location.zip;
            console.log(address);

            GeolocationService.addressToPosition(address).then(function(coordinates) {
                console.log(coordinates);
                if (coordinates.latitude && coordinates.longitude) {
                    console.log('center and refresh');
                    $scope.map.center = coordinates;
                    $scope.map.control.refresh(coordinates);
                }
            });
        });
    });