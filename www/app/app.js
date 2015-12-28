(function(){
  'use strict';

  var app = angular.module('healthsports',[]);
  app.controller('appRootController', ['$scope', '$rootScope', '$http', appRootController]);

  function appRootController($scope, $rootScope, $http){
    var vm = this; 
    vm.sendEmail = sendEmail;

    function sendEmail(){
       $http.post('api/sendEmail', {emailSender: vm.emailSender})
            .then(afterEmailWasSent);
    }

    function afterEmailWasSent(){
      vm.emailSender = {};
      vm.emailSent = true;
    }
  }
})();
