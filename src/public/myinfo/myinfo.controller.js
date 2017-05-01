(function() {
    'use strict'
    angular.module('public')
        .controller("MyinfoController", MyinfoController)


    MyinfoController.$inject = ["regData"]

    function MyinfoController(regData) {
        var myinfo = this;
        myinfo.reg = regData;
        console.log(myinfo.reg);
        
    }
})();
