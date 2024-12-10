describe('Clock Module', function () {
  describe('MyController', function () {
    var $scope;
    beforeEach(module('clock-module'));

    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MyController', { $scope: $scope });
    }));

    it('should initialize clock.now with the current time', function () {
      expect($scope.clock.now).toBeDefined();
    });
  });
});
