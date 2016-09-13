var desktopController = function ($scope, SavingsService) {
    var model = this;

    model.$onInit = function () {
        SavingsService.getProducts().then(function (accounts) {
            model.accounts = accounts;
        });
    }
};


app.component('desktopSavings', {
    templateUrl: 'savings/desktop.component.html',
    controllerAs: 'model',
    controller: ['$scope' , 'SavingsService', desktopController],
    bindings: {}
});