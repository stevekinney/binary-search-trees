const Node = require('./node');

function BinarySearchTree() {
  this.root = null;

  for (var i = 0; i < arguments.length; i++) {
    this.addNode(arguments[i]);
  }
}

BinarySearchTree.prototype.addNode = function (value, currentNode) {
  var newNode = new Node(value);

  if (this.root === null) { this.root = newNode; return this; }

  currentNode = currentNode || this.root;

  if (newNode.value < currentNode.value) {
    if (currentNode.left === null) {
      currentNode.left = newNode;
      return this;
    } else {
      return this.addNode(value, currentNode.left);
    }
  } else if (newNode.value > currentNode.value) {
    if (currentNode.right === null) {
      currentNode.right = newNode;
      return this;
    } else {
      return this.addNode(value, currentNode.right);
    }
  }
};

BinarySearchTree.prototype.includes = function (value, currentNode) {
  if (!this.root) { return false; }

  currentNode = currentNode || this.root;

  if (currentNode.value === value) { return true; }

  if (value < currentNode.value) {
    if (currentNode.left) { return this.includes(value, currentNode.left); }
    return false;
  }

  if (value > currentNode.value) {
    if (currentNode.right) { return this.includes(value, currentNode.right); }
    return false;
  }

  return false;
};

module.exports = BinarySearchTree;
