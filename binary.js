class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }
    let tempRoot = this.root;

    while (true) {
      if (node.value === tempRoot.value) return this;
      if (node.value < tempRoot.value) {
        if (tempRoot.left === null) {
          tempRoot.left = node;
          return this;
        }
        tempRoot = tempRoot.left;
      } else {
        if (tempRoot.right === null) {
          tempRoot.right = node;
          return this;
        }
        tempRoot = tempRoot.right;
      }
    }
  }

  // left -> root -> right
  traverseInOrder(node) {
    if (!node) return [];

    const leftValues = this.traverseInOrder(node.left);
    const rightValues = this.traverseInOrder(node.right);

    return [...leftValues, node.value, ...rightValues];
  }

  // left -> right -> root
  traversePostOrder(node) {
    if (!node) return [];

    const leftValues = this.traversePostOrder(node.left);
    const rightValues = this.traversePostOrder(node.right);

    return [...leftValues, ...rightValues, node.value];
  }

  // Depth first
  // root -> left -> right
  traversePreOrder(node) {
    if (!node) return [];

    const leftValues = this.traversePreOrder(node.left);
    const rightValues = this.traversePreOrder(node.right);
    return [node.value, ...leftValues, ...rightValues];
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(1);
binaryTree.insert(9);
binaryTree.insert(7);
