const assert = require('assert');
const BinarySearchTree = require('../lib/binary-search-tree.js');
const Node = require('../lib/node.js');

describe('BinarySearchTree', function () {

  it('should exist', function () {
    assert.equal(typeof BinarySearchTree, 'function');
  });

  it('should have a root property', function () {
    var bst = new BinarySearchTree();
    assert.notEqual(typeof bst.root, 'undefined');
    assert.equal(bst.root, null);
  });

  it('should have an addNode method', function () {
    var bst = new BinarySearchTree();
    assert.equal(typeof bst.addNode, 'function');
  });

  it('should use the first value passed in as the root', function () {
    var bst = new BinarySearchTree(42);
    assert.equal(bst.root.value, 42);
  });

  it('should use a series of numbers passed in to build the tree', function () {
    var bst = new BinarySearchTree(12, 6, 20);
    assert.equal(bst.root.value, 12);
    assert.equal(bst.root.left.value, 6);
    assert.equal(bst.root.right.value, 20);
  });

  describe('addNode', function () {

    it('should replace the root node if none exists', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42);
      assert(bst.root instanceof Node);
      assert.equal(bst.root.value, 42);
    });

    it('should add a node to the left if it\'s less than the root', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42).addNode(22);
      assert(bst.root.left instanceof Node);
      assert.equal(bst.root.left.value, 22);
    });

    it('should add a node to the right if it\'s greater than the root', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42).addNode(52);
      assert(bst.root.right instanceof Node);
      assert.equal(bst.root.right.value, 52);
    });

    it('should add a node to a subtree (left-left)', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42).addNode(22).addNode(11);
      assert(bst.root.left.left instanceof Node);
      assert.equal(bst.root.left.left.value, 11);
    });

  });

  describe('includes', function () {

    it('should return false if there are no values in the tree', function () {
      var bst = new BinarySearchTree();
      assert(!bst.includes(42));
    });

    it('should return true if the value is at the root of the tree', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42);
      assert(bst.includes(42));
    });

    it('should return false in a one node tree if the value does not equal the root', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42);
      assert(!bst.includes(22));
    });

    it('should traverse the tree and return true if its anywhere in the tree (left traversal)', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42).addNode(22);
      assert(bst.includes(22));
    });

    it('should traverse the tree and return true if its anywhere in the tree (right traversal)', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42).addNode(52);
      assert(bst.includes(52));
    });

    it('should traverse a multi-branch tree', function () {
      var bst = new BinarySearchTree();
      bst.addNode(42);
      bst.addNode(52);
      bst.addNode(22);
      assert(bst.includes(52));
      assert(bst.includes(22));
    });

  });

});
