var List = require('../list')
var Node = require('../node')

describe('SimpleList', function() {
  it('allow adding new elements', function() {
    list = new List();
    expect(list.add(new Node('first'))).toEqual(['first']);
    expect(list.add(new Node('second'))).toEqual(['first', 'second']);
  });

  it('allow finding elements', function() {
    list = new List();
    list.add(new Node('findable'));
    expect(list.find('findable').value()).toBe('findable');
    expect(list.find('no-present')).toBe(undefined);
  });

  it('allow removing elements', function() {
    list = new List();
    list.add(new Node('one'));
    list.add(new Node('two'));
    list.add(new Node('three'));
    list.add(new Node('four'));
    list.add(new Node('five'));
    expect(list.values()).toEqual(['one', 'two', 'three', 'four', 'five']);
    expect(list.remove('two').value()).toBe('two');
    expect(list.values()).toEqual(['one', 'three', 'four', 'five']);
    expect(list.remove('one').value()).toBe('one');
    expect(list.values()).toEqual(['three', 'four', 'five']);
    expect(list.remove('five').value()).toBe('five');
    expect(list.remove('nine')).toBe(undefined);
    expect(list.values()).toEqual(['three', 'four']);
  });
});
