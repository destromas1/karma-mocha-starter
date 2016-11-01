'use strict';
app.factory('productService', ['$http', function ($http) {

    var api = 'http://localhost:9001/api/product/';

    var getAll = function () {
        return $http({
            url: api,
            method: 'GET'
        });
    };

    var post = function (product) {
        return $http({
            url: api,
            method: 'POST',
            data: product
        });
    };

    return {
        get: getAll,
        save: post
    };
}]);
