class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  // push
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //unshift
  unshift(value) {
    const node = new Node(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  //pop
  pop() {
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
  }

  //shift
  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }
  //remove(node)
  remove(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.shift();
        } else if (currentNode === this.tail) {
          this.pop();
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.length--;
        }
      }
      currentNode = currentNode.next;
    }

    return this;
  }

  //insert(index,value)
  insert(index, value) {
    if (index === 1) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const node = new Node(value);
      let currentNode;
      let counter;

      if (index < Math.floor(this.length / 2)) {
        currentNode = this.head;
        counter = 1;
        while (counter < index) {
          currentNode = currentNode.next;
          counter++;
        }
      } else {
        currentNode = this.tail;
        counter = this.length;
        while (counter > index) {
          currentNode = currentNode.prev;
          counter--;
        }
      }

      node.next = currentNode;
      node.prev = currentNode.prev;
      currentNode.prev.next = node;
      currentNode.prev = node;
      this.length++;
    }
  }
}

const firstList = new LinkedList(2);
firstList.push(3);
firstList.push(4);
firstList.push(5);
firstList.unshift(1);
firstList.insert(2, 6);

console.table(firstList);
