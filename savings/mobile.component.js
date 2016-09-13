var mobileController = function ($scope, SavingsService) {
    var model = this;
    model.$onInit = function () {
        SavingsService.getProducts().then(function (products) {
            model.products = products;
            var idx = 0;
            _.each(model.products, function (a) {
                a.index = idx++;
            });

            model.currentProduct = model.products[0];
            model.nextProduct = model.products[1];
        });
    }

    model.showProduct = function (product) {
        model.currentProduct = product;
        model.previousProduct = model.products[model.currentProduct.index - 1];
        model.nextProduct = model.products[model.currentProduct.index + 1];
    }
};


app.component('mobileSavings', {
    templateUrl: 'savings/mobile.component.html',
    controllerAs: 'model',
    controller: ['$scope', 'SavingsService', mobileController],
    bindings: {}
});