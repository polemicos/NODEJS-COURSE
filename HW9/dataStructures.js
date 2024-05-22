// Stack Class
class Stack {
    constructor() {
        // Initialize an empty array to store stack elements
        this.items = [];
    }

    // Push an item onto the stack
    push(item) {
        this.items.push(item);
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Pop an item off the stack
    pop() {
        if (!this.isEmpty()) return this.items.pop();
    }

    // Peek at the top item of the stack without removing it
    peek() {
        if (!this.isEmpty()) return this.items[this.items.length - 1];
    }
}

// Queue Class
class Queue {
    constructor() {
        // Initialize an empty array to store queue elements
        this.items = [];
    }

    // Enqueue an item to the back of the queue
    enqueue(item) {
        this.items.push(item);
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Dequeue an item from the front of the queue
    dequeue() {
        if (!this.isEmpty()) return this.items.shift();
    }

    // Peek at the front item of the queue without removing it
    peek() {
        if (!this.isEmpty()) return this.items[0];
    }
}

// Binary Tree Node Class
class Node {
    constructor(val) {
        // Value of the node
        this.value = val;
        // Left child node
        this.left = null;
        // Right child node
        this.right = null;
    }

    // Pre-order traversal: Node -> Left -> Right
    traversePreOrder() {
        console.log(this.value);
        if (this.left) this.left.traversePreOrder();
        if (this.right) this.right.traversePreOrder();
    }

    // In-order traversal: Left -> Node -> Right
    traverseInOrder() {
        if (this.left) this.left.traverseInOrder();
        console.log(this.value);
        if (this.right) this.right.traverseInOrder();
    }

    // Post-order traversal: Left -> Right -> Node
    traversePostOrder() {
        if (this.left) this.left.traversePostOrder();
        if (this.right) this.right.traversePostOrder();
        console.log(this.value);
    }
}

// Binary Tree Class
class BinaryTree {
    constructor() {
        // Root of the binary tree
        this.root = null;
    }

    // Insert a node into the binary tree
    insertNode(val) {
        const newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while (true) {
            if (val < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // Search for a value in the binary tree
    searchValue(val) {
        let currentNode = this.root;

        while (currentNode !== null) {
            if (val === currentNode.value) {
                return currentNode;
            }
            if (val < currentNode.value) currentNode = currentNode.left;
            else currentNode = currentNode.right;
        }

        return "No such value";
    }

    // Traverse the binary tree in pre-order
    traversePreOrder() {
        if (this.root !== null) this.root.traversePreOrder();
    }

    // Traverse the binary tree in in-order
    traverseInOrder() {
        if (this.root !== null) this.root.traverseInOrder();
    }

    // Traverse the binary tree in post-order
    traversePostOrder() {
        if (this.root !== null) this.root.traversePostOrder();
    }

    // Check if the binary tree is a binary search tree (BST)
    isBST() {
        let isBSTHelper = (node, min, max) => {
            if (node === null) return true;
            if (node.value <= min || node.value >= max) return false;
            return isBSTHelper(node.left, min, node.value) && isBSTHelper(node.right, node.value, max);
        };

        return isBSTHelper(this.root, -Infinity, Infinity);
    }
}

// Graph Class
class Graph {
    constructor() {
        // Adjacency list to store the graph
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices in the graph
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Depth-First Search (DFS) starting from a vertex
    DFS(start) {
        const res = [];
        const were = {};
        const adjacencyList = this.adjacencyList;
        (function DFSRecursive(vertex) {
            if (!vertex) return;
            were[vertex] = true;
            res.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!were[neighbor]) {
                    DFSRecursive(neighbor);
                }
            });
        })(start);

        return res;
    }

    // Breadth-First Search (BFS) starting from a vertex
    BFS(start) {
        const queue = [start];
        const res = [];
        const were = {};
        were[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            res.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!were[neighbor]) {
                    were[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return res;
    }

    // Dijkstra's algorithm to find the shortest path between two vertices
    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const queue = [];
        const visited = {};

        for (let vertex in this.adjacencyList) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }
        distances[start] = 0;
        queue.push({ vertex: start, priority: 0 });

        while (queue.length > 0) {
            queue.sort((a, b) => a.priority - b.priority);

            let smallest = queue.shift();
            let currentVertex = smallest.vertex;

            if (visited[currentVertex]) continue;
            visited[currentVertex] = true;

            if (currentVertex === end) {
                const path = [];
                let currentNode = currentVertex;
                while (previous[currentNode]) {
                    path.push(currentNode);
                    currentNode = previous[currentNode];
                }
                path.push(start);
                return path.reverse();
            }

            this.adjacencyList[currentVertex].forEach(neighbor => {
                let alt = distances[currentVertex] + 1; // assuming all edges have weight 1
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = currentVertex;
                    queue.push({ vertex: neighbor, priority: alt });
                }
            });
        }

        return [];
    }
}

// LinkedList Element Class
class ElemWithLink {
    constructor(val) {
        // Value of the element
        this.value = val;
        // Link to the next element
        this.nextElem = null;
    }
}

// LinkedList Class
class LinkedList {
    constructor() {
        // Head of the linked list
        this.head = null;
    }

    // Insert an element at the end of the linked list
    insert(val) {
        let newElem = new ElemWithLink(val);
        if (this.head === null) this.head = newElem;
        else {
            let curr = this.head;
            while (curr.nextElem !== null) {
                curr = curr.nextElem;
            }
            curr.nextElem = newElem;
        }
    }

    // Delete an element from the linked list
    delete(val) {
        if (this.head === null) return;
        if (this.head.value === val) {
            this.head = this.head.nextElem;
            return;
        }

        let curr = this.head;
        while (curr.nextElem !== null && curr.nextElem.value !== val) {
            curr = curr.nextElem;
        }
        if (curr.nextElem !== null) {
            curr.nextElem = curr.nextElem.nextElem;
        }
    }

    // Search for an element in the linked list
    search(val) {
        let curr = this.head;
        while (curr !== null) {
            if (curr.value === val) {
                return curr;
            }
            curr = curr.nextElem;
        }

        return "No such value";
    }

    // Check if the linked list has a cycle
    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.nextElem !== null) {
            slow = slow.nextElem;
            fast = fast.nextElem.nextElem;
            if (slow === fast) {
                return true;
            }
        }

        return false;
    }
}

// MinMaxStack Class
class MinMaxStack {
    constructor() {
        // Stack to store original elements
        this.originalStack = new Stack();
        // Stack to keep track of minimum values
        this.minStack = new Stack();
        // Stack to keep track of maximum values
        this.maxStack = new Stack();
    }

    // Push an item onto the stack
    push(item) {
        this.originalStack.push(item);

        if (this.minStack.isEmpty() || item <= this.minStack.peek()) {
            this.minStack.push(item);
        } else {
            this.minStack.push(this.minStack.peek());
        }

        if (this.maxStack.isEmpty() || item >= this.maxStack.peek()) {
            this.maxStack.push(item);
        } else {
            this.maxStack.push(this.maxStack.peek());
        }
    }

    // Pop an item off the stack
    pop() {
        if (this.originalStack.isEmpty()) return null;
        this.minStack.pop();
        this.maxStack.pop();
        return this.originalStack.pop();
    }

    // Get the minimum value in the stack
    getMin() {
        if (this.minStack.isEmpty()) return null;
        return this.minStack.peek();
    }

    // Get the maximum value in the stack
    getMax() {
        if (this.maxStack.isEmpty()) return null;
        return this.maxStack.peek();
    }

    // Peek at the top item of the stack without removing it
    peek() {
        if (this.originalStack.isEmpty()) return null;
        return this.originalStack.peek();
    }

    // Check if the stack is empty
    isEmpty() {
        return this.originalStack.isEmpty();
    }
}

// Test cases

// Stack Test
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());  // 30
console.log(stack.pop());   // 30
console.log(stack.pop());   // 20
console.log(stack.pop());   // 10
console.log(stack.isEmpty()); // true

// Queue Test
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());  // 10
console.log(queue.dequeue());  // 10
console.log(queue.dequeue());  // 20
console.log(queue.dequeue());  // 30
console.log(queue.isEmpty()); // true

// Binary Tree Test
let binaryTree = new BinaryTree();
binaryTree.insertNode(10);
binaryTree.insertNode(5);
binaryTree.insertNode(15);
binaryTree.insertNode(2);
binaryTree.insertNode(7);
binaryTree.insertNode(12);
binaryTree.insertNode(20);
binaryTree.traverseInOrder(); // 2, 5, 7, 10, 12, 15, 20
console.log(binaryTree.searchValue(7));  // Node { left: null, right: null, value: 7 }
console.log(binaryTree.isBST());  // true

// Graph Test
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
console.log(graph.DFS('A'));  // [ 'A', 'B', 'C' ]
console.log(graph.BFS('A'));  // [ 'A', 'B', 'C' ]
console.log(graph.dijkstra('A', 'C')); // [ 'A', 'C' ]

// LinkedList Test
let linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
console.log(linkedList.search(3));  // ElemWithLink { value: 3, nextElem: ElemWithLink { value: 4, nextElem: null } }
linkedList.delete(3);
console.log(linkedList.search(3));  // No such value
console.log(linkedList.hasCycle()); // false

// MinMaxStack Test
let minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(2);
minMaxStack.push(8);
minMaxStack.push(1);
console.log(minMaxStack.getMin());  // 1
console.log(minMaxStack.getMax());  // 8
minMaxStack.pop();
console.log(minMaxStack.getMin());  // 2
console.log(minMaxStack.getMax());  // 8
