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
      return this.addNode(value, currentNode[direction]);
    }
  });

  return this;
};

BinarySearchTree.prototype.includes = function (value, currentNode) {
  currentNode = currentNode || this.root;
  if (!currentNode) { return false; }

  if (currentNode.value === value) { return true; }

  if (value < currentNode.value) {
    if (currentNode.left) { return this.includes(value, currentNode.left); }
  }

  if (value > currentNode.value) {
    if (currentNode.right) { return this.includes(value, currentNode.right); }
  }

  return false;
};

BinarySearchTree.prototype.findNext = function (value, currentNode, callback) {
  if (value < currentNode.value) { callback.call(this, value, currentNode, 'left'); }
  if (value > currentNode.value) { callback.call(this, value, currentNode, 'right'); }
};

module.exports = BinarySearchTree;
