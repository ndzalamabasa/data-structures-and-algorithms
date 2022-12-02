class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

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
  // to insert a node with a given value
  insertNode(node, newNode) {
    if (node.value === newNode.value) {
      return this;
    }
    // if the value is less than the node
    // value move left of the tree
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null recur until
        // null is found
        this.insertNode(node.left, newNode);
      }
    }

    // if the value is more than the node
    // value move right of the tree
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

  preOrder() {
    //(node)
    // root - left - right
    // if(node !== null){
    //   console.log(node.value);
    //   this.preOrder(node.left);
    //   this.preOrder(node.right);
    // }
    const result = [];
    if (!this.root) {
      return result;
    }
    const traverse = (node) => {
      result.push(node.value);
      if(node.left){
        traverse(node.left);
      }
      if (node.right){
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }

  inOrder(node) {
    // left - root - right
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    // left - right - root
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(40);
tree.insert(50);
tree.insert(30);
tree.insert(25);
tree.insert(28);
tree.insert(15);
tree.insert(35);
tree.insert(45);
tree.insert(60);
tree.insert(55);
tree.insert(70);

//Pre order:  root -left - right
// [40, 30, 25, 15, 28, 35, 50, 45, 60, 55, 70]
// console.log(tree.preOrder());

//In order:   left - root - right
// [15, 25, 28, 30, 35, 40, 45, 50, 55, 60, 70]
// tree.inOrder(tree.root);

//Post order: left - right - root
// [15, 28, 25, 35, 30, 45, 55, 70, 60, 50, 40]
// tree.postOrder(tree.root);

// console.table();
