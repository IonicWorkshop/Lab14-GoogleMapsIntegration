angular.module('starter')
    .factory('ContactsService', function($http){
    var BASE_URL = "http://api.randomuser.me/";
    var numberOfContactsToFetch = 5;

    var items = [];
    var n = 0;
    return {
        GetContacts: function(){
            return $http.get(BASE_URL+'?results=' + numberOfContactsToFetch).then(function(response){
                items = response.data.results;
                return items;
            });
        },
        GetContact: function(index) {
            return items[index];
        },
        GetNewContact: function(){
            return $http.get(BASE_URL + '?q' + (n++)).then(function(response){
                return response.data.results[0];
            });
        }
    }
});