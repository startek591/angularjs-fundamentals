describe('Scope Example', function () {
  var $scope;
  beforeEach(module('myApp'));

  describe('MyControlller', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('MyController', { $scope: $scope });
    }));

    it('should initialize movie with', function () {
      $scope.movie = 'Crush Groove';
      expect($scope.movie).toEqual('Crush Groove');
    });
  });
});
