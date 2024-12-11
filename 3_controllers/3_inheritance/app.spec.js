describe('Simple App', function () {
  var $controller, $rootScope, $scope;

  beforeEach(module('inheritance'));

  describe('ParentController', function () {
    beforeEach(inject(function (_$controller_, _$rootScope_) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;

      $scope = $rootScope.$new();
      $controller('ParentController', { $scope: $scope });
      $controller('ChildController', { $scope: $scope });
    }));

    it('should initialize $scope.person with greeted = false', function () {
      expect($scope.person).toBeDefined();
      expect($scope.person.greeted).toBe(false);
    });

    it('should modify $scope.person when sayHello() is called', function () {
      expect($scope.person.name).toBeUndefined();
      expect($scope.person.greeted).toBe(false);

      $scope.sayHello();

      $scope.person.name = 'John Doe';

      expect($scope.person.name).toBe('John Doe');
      expect($scope.person.greeted).toBe(true);
    });
  });
});
