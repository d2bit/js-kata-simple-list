//
// SimpleList Kata
// http://codekata.com/kata/kata21-simple-lists
//

function List() {
  var _content = [];

  function _values() {
    return _content;
  }

  function _add(item) {
    _content.push(item);
    return _content;
  }

  function _find(item) {
    var found = undefined;
    _content.some(function(element) {
      if (item === element) {
        found = element;
        return true;
      }
    });
    return found;
  }

  function _remove(item) {
    var removedItem = undefined;
    _content.some(function(element, index) {
      if (item === element) {
        removedItem = _content.splice(index, 1)[0];
        return true;
      }
    });
    return removedItem;
  }

  return {
    values: _values,
    add: _add,
    find: _find,
    remove: _remove,
  };
}

module.exports = List;
