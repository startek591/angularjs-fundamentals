describe('Simple App', function () {
  var $scope;

  beforeEach(module('actions'));

  describe('First Controller', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('FirstController', { $scope: $scope });
    }));

    it('should initialize the', function () {
      expect($scope.counter).toBe(0);
    });

    it('should increase counter by the specified amount when add() is called', function () {
      $scope.add(5);
      expect($scope.counter).toBe(5);

      $scope.add(3);
      expect($scope.counter).toBe(8);
    });

    it('should decrease counter by the specified amount when subtract() is called', function () {
      $scope.add(10);
      expect($scope.counter).toBe(10);

      $scope.subtract(4);
      expect($scope.counter).toBe(6);

      $scope.subtract(2);
      expect($scope.counter).toBe(4);
    });
  });
});
