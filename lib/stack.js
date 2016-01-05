function LinkedStack() {
  this.initialize();
}

LinkedStack.prototype.initialize = function() {
  this.topNode = null;
};

LinkedStack.prototype.push = function(node) {
  node.previousNode = this.topNode;

  this.topNode = node;
};

LinkedStack.prototype.pop = function() {
  var topNode = this.topNode;

  this.topNode = topNode.previousNode;

  return topNode;
};

module.exports = LinkedStack;
