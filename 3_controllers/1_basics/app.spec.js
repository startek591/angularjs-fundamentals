describe('Basic Controller Example', function () {
  var $scope;
  beforeEach(module('myApp'));

  describe('My Controller', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MyController', { $scope: $scope });
    }));

    it('should initialze the person value', function () {
      const obj = { name: 'John Doe' };
      $scope.person = obj;
      expect($scope.person.name).toEqual('John Doe');
    });

    it('should initialize the person.name value', function () {
      $scope.person.name = 'Jonathan Fambro';
      expect($scope.person.name).toEqual('Jonathan Fambro');
    });
  });
});
