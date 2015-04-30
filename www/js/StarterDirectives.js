angular.module('starter.directives', [])
    .directive('phoneicon', [function () {
        return {
            restrict: 'E',
            replace: true,
            scope: false,
            template: '<i class="icon"></i>',

            compile: function (element, attrs) {
                var icon = ionic.Platform.isAndroid() ? "ion-android-call" : "ion-ios-telephone";
                angular.element(element[0]).addClass(icon);
            }
        };
    }])