describe('component: mobile-savings', function () {

    var scope, model, componentController, savingsService, $q;
    beforeEach(angular.mock.module('app'));

    function createController() {
        model = componentController('mobileSavings', {$scope: scope, SavingsService: savingsService});
        model.$onInit();
    }

    beforeEach(inject(function ($rootScope, $componentController, _SavingsService_, _$q_) {
        $q = _$q_;
        componentController = $componentController;
        savingsService = _SavingsService_;
        scope = $rootScope.$new();
    }));


    it('should get initialized properly', function () {
        createController();
        expect(model).toBeDefined();
    });

    it('show Product should display appropriate products', function () {
        var deferred = $q.defer();
        spyOn(savingsService, 'getProducts').and.returnValue(deferred.promise);

        deferred.resolve([
            {
                "product": "Fixed Saver",
                "interestRate": "2.20%",
                "minimum": 500,
                "interestType": "Fixed"
            },
            {
                "product": "Flex Saver",
                "interestRate": "1.5%",
                "minimum": 0,
                "interestType": "Tracker"
            },
            {
                "product": "Offset Saver",
                "interestRate": "1.80% *",
                "minimum": 1000,
                "interestType": "Fixed"
            }
        ]);

        createController();
        model.$onInit();
        scope.$apply();
        expect(model.nextProduct).toBeDefined();

        model.showProduct(model.nextProduct);

        expect(model.currentProduct).toEqual({
            "product": "Flex Saver",
            "interestRate": "1.5%",
            "minimum": 0,
            "interestType": "Tracker",
            "index": 1
        });
        expect(model.nextProduct).toEqual({
            "product": "Offset Saver",
            "interestRate": "1.80% *",
            "minimum": 1000,
            "interestType": "Fixed",
            "index": 2
        });
        expect(model.previousProduct).toEqual({
            "product": "Fixed Saver",
            "interestRate": "2.20%",
            "minimum": 500,
            "interestType": "Fixed",
            "index": 0
        });

        model.showProduct(model.nextProduct);

        expect(model.currentProduct).toEqual({
            "product": "Offset Saver",
            "interestRate": "1.80% *",
            "minimum": 1000,
            "interestType": "Fixed",
            "index": 2
        });
        expect(model.previousProduct).toEqual({
            "product": "Flex Saver",
            "interestRate": "1.5%",
            "minimum": 0,
            "interestType": "Tracker",
            "index": 1
        });
        expect(model.nextProduct).toBeUndefined();

        model.showProduct(model.previousProduct);
        model.showProduct(model.previousProduct);
        expect(model.previousProduct).toBeUndefined();
    });


});