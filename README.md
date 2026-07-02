# Linked List in JavaScript

This project demonstrates a **Linked List data structure** implemented in JavaScript.  
It includes a `Node` class and a `LinkedList` class with common operations such as adding, removing, and searching nodes.

---

## 🚀 Features
- **Node class**: stores `data` and `next` reference
- **LinkedList class**:
  - `addFirst(node)` → add a node to the front
  - `addLast(node)` → add a node to the end
  - `indexOf(node)` → find the index of a node
  - `removeAt(index)` → remove a node at a given position
- **Unit tests** with Mocha + Chai

---

## 📂 Project Structure
linked-list-js/
│
├── Node.js
├── LinkedList.js
├── test.js
└── README.md


---

## 🧪 Running Tests
This project uses **Mocha** and **Chai** for testing.

1. Install dependencies:
   ```bash
   npm install mocha chai

   Run tests:

bash
npx mocha

or add a script in package.json:
"scripts": {
  "test": "mocha"
}
Then run:

bash
npm test

const Node = require('./Node');
const LinkedList = require('./LinkedList');

const list = new LinkedList();

const node1 = new Node(4);
const node2 = new Node(3);

list.addLast(node1); // head → node1
list.addLast(node2); // head → node1 → node2

console.log(list.indexOf(node1)); // 0
console.log(list.indexOf(node2)); // 1

list.removeAt(0); // removes node1
console.log(list.head.data); // 3

