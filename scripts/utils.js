module.exports.Node = class Node {
  constructor(data) {
    this.data = data;
    this.next = next;
  }
};

module.exports.DoublyLinkedList = class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
  }

  appendNode(node) {
    this.tail.next = node;
    this.tail = node;
  }

  find(data) {
    let tmp = this.head;
    while (tmp) {
      if (tmp.data === data) {
        return tmp;
      }
      tmp = tmp.next;
    }
  }
};
