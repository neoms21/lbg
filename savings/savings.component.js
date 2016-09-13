function desktopController($scope, $window, SavingsService) {

    var model = this;

    model.$onInit = function () {
        model.isMobile = $window.innerWidth < 1000;
    }
}

app.component('savingsComponent', {
    templateUrl: '/lbg/savings/savings.component.html',
    controllerAs: 'model',
    controller: ['$scope', '$window', desktopController],
    bindings: {}
});