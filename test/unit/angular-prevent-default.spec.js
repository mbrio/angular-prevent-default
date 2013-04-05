describe('preventDefault', function () {
  beforeEach(module('prevent-default'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0.3');
    }));
  });

  it('should assign a click event handler', inject(function ($compile, $rootScope) {
    var elm = angular.element('<a href="#" prevent-default>test</a>'),
      ele = $compile(elm)($rootScope);

    expect($._data(ele[0]).events.click).toBeDefined();
  }));
});