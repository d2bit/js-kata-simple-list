//
// SimpleList Kata
// http://codekata.com/kata/kata21-simple-lists
//

var Node = require('./node');

var List = function List() {
  var _first = undefined,
      _last = _first;

  this.values = function values() {
    var valuesArray = [];
    var iterator = _first;
    while (iterator) {
      valuesArray.push(iterator.value().value());
      iterator = iterator.next();
    }
    return valuesArray;
  };

  this.add = function append(item) {
    if (_last) {
      _last = _last.append(new Node(item));
    } else {
      _first = _last = new Node(item);
    }
    return this.values();
  };

  this.find = function find(item) {
    var iterator = _first;
    while (iterator) {
      if (iterator.value().value() === item) {
        return iterator.value();
      }
      iterator = iterator.next();
    }
  };

  this.remove = function remove(item) {
    var pastNode, iterator = _first;
    while (iterator) {
      if (iterator.value().value() === item) {
        if (iterator === _first) {
          _first = iterator.next();
        } else {
          pastNode.remove();
        }
        return iterator.value();
      }
      pastNode = iterator;
      iterator = iterator.next();
    }
  };
};

module.exports = List;
