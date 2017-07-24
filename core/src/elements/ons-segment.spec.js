'use strict';

describe('ons-segment', () => {
  it('provides \'OnsSegmentElement\' global variable', () => {
    expect(window.ons.SegmentElement).to.be.ok;
  });

  describe('class attribute', () => {
    it('should contains "segment" class name automatically', () => {
      const element = new ons.SegmentElement();
      element.setAttribute('class', 'foobar');
      expect(element.classList.contains('segment')).to.be.true;
      expect(element.classList.contains('foobar')).to.be.true;
    });
  });

  it('provides modifier attribute', () => {
    var element = new ons.SegmentElement();
    element.setAttribute('modifier', 'hoge');
    expect(element.classList.contains('segment--hoge')).to.be.true;

    element.setAttribute('modifier', 'foo bar');
    expect(element.classList.contains('segment--foo')).to.be.true;
    expect(element.classList.contains('segment--bar')).to.be.true;
    expect(element.classList.contains('segment--hoge')).not.to.be.true;

    element.classList.add('segment--piyo');
    element.setAttribute('modifier', 'fuga');
    expect(element.classList.contains('segment--piyo')).to.be.true;
    expect(element.classList.contains('segment--fuga')).to.be.true;
  });
});
