//       tree
//       ----
//        1    <-- root
//      /   \
//     2     3
//    /
//   4

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // ------ function to be implemented ------
  // insert(data)
  // remove(data)

  // ------ Helper function ------
  // findMinNode()
  // getRootNode()

  // in-order(node)
  // pre-order(node)
  // post-order(node)

  // search(node, data)

  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position in the
      // tree and add the node
      this.insertNode(this.root, newNode);
    }
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recur until
        // null is found
        this.insertNode(node.left, newNode);
      }
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null recur until
        // null is found
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let root = null;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);

console.log(root);