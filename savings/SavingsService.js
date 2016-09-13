app.service('SavingsService', function ($http, $q) {

    this.getProducts = function () {
        var defer = $q.defer();

        $http.get('api/accounts.json').then(function (response) {
            defer.resolve(response.data.accounts);
        })

        return defer.promise;
    };

});