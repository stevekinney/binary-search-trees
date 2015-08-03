const Node = require('./node');

function BinarySearchTree() {
  this.root = null;

  for (var i = 0; i < arguments.length; i++) {
    this.addNode(arguments[i]);
  }
}

BinarySearchTree.prototype.addNode = function (value, currentNode) {
  currentNode = currentNode || this.root;
  if (currentNode === null) { this.root = new Node(value); return this; }

  this.findNext(value, currentNode, function (value, currentNode, direction) {
    if (currentNode[direction] === null) {
      currentNode[direction] = new Node(value);
    } else {
      this.addNode(value, currentNode[direction]);
    }
  });

  return this;
};

BinarySearchTree.prototype.includes = function (value, currentNode) {
  currentNode = currentNode || this.root;
  if (!currentNode) { return false; }

  if (currentNode.value === value) { return true; }

  return this.findNext(value, currentNode, function (value, currentNode, direction) {
    if (currentNode[direction]) { return this.includes(value, currentNode[direction]); }
    return false;
  });
};

BinarySearchTree.prototype.findNext = function (value, currentNode, callback) {
  var direction;

  if (value < currentNode.value) { direction = 'left'; }
  if (value > currentNode.value) { direction = 'right'; }

  return callback.call(this, value, currentNode, direction);
};

module.exports = BinarySearchTree;
