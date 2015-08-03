const assert = require('assert');
const Node = require('../lib/node');

describe('Node', function () {

  it('should exist', function () {
    assert.equal(typeof Node, 'function');
  });

  it('should have a value', function () {
    var node = new Node(42);
    assert.equal(node.value, 42);
  });

  it('should have a node to the left that defaults to null', function () {
    var node = new Node(42);
    assert.equal(node.left, null);
  });

  it('should have a node to the right that defaults to null', function () {
    var node = new Node(42);
    assert.equal(node.right, null);
  });

});
