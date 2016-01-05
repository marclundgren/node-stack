function Stack() {
  this.initialize();
}

Stack.prototype.initialize = function() {
  this.topNode = null;
};

Stack.prototype.push = function(node) {
  node.previousNode = this.topNode; // for popping

  this.topNode = node; // for pushing
};

Stack.prototype.pop = function() {
  var topNode = this.topNode;

  this.topNode = topNode.previousNode;

  return topNode;
};

module.exports = Stack;
