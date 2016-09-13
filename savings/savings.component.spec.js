describe('component: csv-atomus', function () {

    var scope, model, componentController;
    beforeEach(angular.mock.module('app'));

    function createController() {
        model = componentController('savingsComponent', {$scope: scope});
        model.$onInit();
    }

    beforeEach(inject(function ($rootScope, $componentController) {
        componentController = $componentController;
        scope = $rootScope.$new();
    }));


    it('should get initialized properly', function () {
        createController();
        expect(model).toBeDefined();
    });


});