describe('web view', function () {
  beforeEach(module('app'));

  it('should import familiar', inject(function (familiar) {
    assert.ok(familiar);
  }));
});
