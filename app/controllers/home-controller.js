"use strict";

app.controller('homeCtrl', ['$scope', function ($scope) {
  console.log('homeCtrl is running...');

  $scope.addNumbers = function (num1, num2) {
    return num1 + num2;
  };

}]);
