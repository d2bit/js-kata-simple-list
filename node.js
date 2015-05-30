var Node = function Node(content, options) {
  var _options = options || {},
      _prev = _options.prev || undefined,
      _next = _options.next || undefined,
      _content = content;

  this.value = function value(newContent) {
    if (newContent) {
      _content = newContent;
    }
   return _content;
  };

  this.next = function next() {
    return _next;
  };

  this.prev = function prev() {
    return _prev;
  };

  this.append = function append(newNode) {
    _next = newNode;
    return newNode;
  };

  this.remove = function remove() {
    _next = _next.next();
  };
};

module.exports = Node;
