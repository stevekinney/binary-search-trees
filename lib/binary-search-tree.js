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

  if (value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = new Node(value);
    } else {
      return this.addNode(value, currentNode.left);
    }
  }

  if (value > currentNode.value) {
    if (currentNode.right === null) {
      currentNode.right = new Node(value);
    } else {
      return this.addNode(value, currentNode.right);
    }
  }

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

module.exports = BinarySearchTree;
