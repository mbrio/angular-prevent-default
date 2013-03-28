describe('prevent-default', function () {
  it('should prevent a link\'s default action', function () {
    browser().navigateTo('/');
    element('a').click();
    expect(browser().window().hash()).toBe('');
  });
});