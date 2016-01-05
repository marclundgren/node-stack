function Stack() {
  this.initialize();
}

Stack.prototype.initialize = function() {
  this.topNode = null;
};

Stack.prototype.push = function(node) {
  node.previousNode = this.topNode

  this.topNode = node;
};

Stack.prototype.pop = function() {
  var topNode = this.topNode;

  this.topNode = topNode.previousNode;

  return topNode;
};

module.exports = Stack;
