var List = require('../list')

describe('SimpleList', function() {
  it('allow adding new elements', function() {
    list = List();
    expect(list.add('first')).toEqual(['first']);
    expect(list.add('second')).toEqual(['first', 'second']);
  });

  it('allow finding elements', function() {
    list = List();
    list.add('findable');
    expect(list.find('findable')).toBe('findable');
    expect(list.find('no-present')).toBe(undefined);
  });

  it('allow removing elements', function() {
    list = List();
    list.add('one');
    list.add('two');
    list.add('three');
    expect(list.values()).toEqual(['one', 'two', 'three']);
    expect(list.remove('two')).toBe('two');
    expect(list.remove('nine')).toBe(undefined);
    expect(list.values()).toEqual(['one', 'three']);
  });
});
