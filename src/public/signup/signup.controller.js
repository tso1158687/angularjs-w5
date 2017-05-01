(function() {
    'use strict'
    angular.module('public')
        .controller("SignupController", SignupController)

    SignupController.$inject = ['RegistrationService'];

    function SignupController(RegistrationService) {
        var signup = this;
        signup.success = false;
        signup.fail = false;
        signup.submit = function() {
            console.log(signup.user);
            var fav = signup.user.favorite.toUpperCase()
            
            
            RegistrationService.getMenuItem(fav)
                .then(function(result) {
                    signup.success = true;
                    signup.fail = false;
                    RegistrationService.submit(signup.user,result);
                    // console.log(RegistrationService.submit2(result))
                    
                })
                .catch(function(error) {
                    signup.success = false;
                    signup.fail = true;

                })
                
        }
    }
})();
