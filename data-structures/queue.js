// FIFO = First In, First Out
// enqueue = Adds an element at the end of the queue
// dequeue = Removes the first element of the queue
// peek = Gets the first element of the queue

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holdingPointer = this.last;
      holdingPointer.prev = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.length) {
      return 'The queue is empty';
    } else if (this.length === 1) {
      const toDeleteNode = this.first;
      this.first = null;
      this.last = null;
      this.length--;
      return toDeleteNode;
    } else {
      const toDeleteNode = this.first;
      this.first = this.first.prev;
      this.length--;
      return toDeleteNode;
    }
  }
}

let myQ = new Queue();
myQ.enqueue('a');
myQ.enqueue('b');
myQ.enqueue('c');
