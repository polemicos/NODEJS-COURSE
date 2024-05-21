// Stack Class
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    pop() {
        if (!this.isEmpty()) return this.items.pop();
    }

    peek() {
        if (!this.isEmpty()) return this.items[this.items.length - 1];
    }
}

// Queue Class
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    dequeue() {
        if (!this.isEmpty()) return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) return this.items[0];
    }
}

// Binary Tree Classes
class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.value = val;
    }

    traversePreOrder() {
        console.log(this.value);
        if (this.left) this.left.traversePreOrder();
        if (this.right) this.right.traversePreOrder();
    }

    traverseInOrder() {
        if (this.left) this.left.traverseInOrder();
        console.log(this.value);
        if (this.right) this.right.traverseInOrder();
    }

    traversePostOrder() {
        if (this.left) this.left.traversePostOrder();
        if (this.right) this.right.traversePostOrder();
        console.log(this.value);
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

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
            }
            else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }

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

    traversePreOrder() {
        if (this.root !== null) this.root.traversePreOrder();
    }

    traverseInOrder() {
        if (this.root !== null) this.root.traverseInOrder();
    }

    traversePostOrder() {
        if (this.root !== null) this.root.traversePostOrder();
    }

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
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

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

// LinkedList Class
class ElemWithLink {
    constructor(val) {
        this.value = val;
        this.nextElem = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

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

    delete(val) {
        if (this.head === null) return;
        if (this.head.value === val) {
            this.head = this.head.nextElem;
            return;
        }

        let curr = this.head;
        while (curr.nextElem !== null
            && curr.nextElem.value !== val) {
            curr = curr.nextElem;
        }
        if (curr.nextElem !== null) {
            curr.nextElem = curr.nextElem.nextElem;
        }
    }

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
        this.originalStack = new Stack();
        this.minStack = new Stack();
        this.maxStack = new Stack();
    }

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

    pop() {
        if (this.originalStack.isEmpty()) return null;
        this.minStack.pop();
        this.maxStack.pop();
        return this.originalStack.pop();
    }

    getMin() {
        if (this.minStack.isEmpty()) return null;
        return this.minStack.peek();
    }

    getMax() {
        if (this.maxStack.isEmpty()) return null;
        return this.maxStack.peek();
    }

    peek() {
        if (this.originalStack.isEmpty()) return null;
        return this.originalStack.peek();
    }

    isEmpty() {
        return this.originalStack.isEmpty();
    }
}





//test cases

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
