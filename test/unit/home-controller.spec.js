"use strict";

describe("homeCtrl", function () {
  var scope;
  var controller;
  
  beforeEach(function () {

    module("app");

    inject(function (_$rootScope_, $controller) {
      scope = _$rootScope_.$new();
      controller = $controller("homeCtrl", { $scope: scope });
    });

  });

  it("Should add 3+2 = 5", function () {

    var sum = scope.addNumbers(3, 2);

    expect(sum).to.equal(5);
  });

});
