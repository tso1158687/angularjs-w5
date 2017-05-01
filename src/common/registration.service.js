(function() {
    "use strict";

    angular.module('common')
        .service('RegistrationService', RegistrationService);


    RegistrationService.$inject = ['$http', 'ApiPath']

    function RegistrationService($http, ApiPath) {
        var service = this;
        // service.reg = [];

        service.getMenuItem = function(short_name) {
            return $http
                .get(ApiPath + "/menu_items/" + short_name + ".json")
                .then(function(response) {
                    return response.data;
                })
        }
        
        service.submit = function(user,item){
            var newUser={
                user:user,
                item:item
            }
            service.user=newUser
        }

        // service.submit2=function(data){
        //     service.reg2=data;
        //     console.log(service.reg2)
        // }

        service.getSubmit = function() {
            return service.user;
            

        };
       
     
    }



})();
