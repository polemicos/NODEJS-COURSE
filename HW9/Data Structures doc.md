## Stack

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It allows elements to be added and removed from only one end, called the top.

### Methods

- **push(item)**: Adds an item to the top of the stack.
    
    - **Time Complexity**: O(1)
- **pop()**: Removes and returns the top item from the stack.
    
    - **Time Complexity**: O(1)
- **peek()**: Returns the top item without removing it.
    
    - **Time Complexity**: O(1)
- **isEmpty()**: Checks if the stack is empty.
    
    - **Time Complexity**: O(1)

## Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the back and removed from the front.

### Methods

- **enqueue(item)**: Adds an item to the back of the queue.
    
    - **Time Complexity**: O(1)
- **dequeue()**: Removes and returns the front item from the queue.
    
    - **Time Complexity**: O(1)
- **peek()**: Returns the front item without removing it.
    
    - **Time Complexity**: O(1)
- **isEmpty()**: Checks if the queue is empty.
    
    - **Time Complexity**: O(1)

## Binary Tree

A binary tree is a hierarchical data structure where each node has at most two children referred to as the left child and the right child.

### Node Methods

- **traversePreOrder()**: Traverses the tree in pre-order (Node -> Left -> Right).
    
    - **Time Complexity**: O(n)
- **traverseInOrder()**: Traverses the tree in in-order (Left -> Node -> Right).
    
    - **Time Complexity**: O(n)
- **traversePostOrder()**: Traverses the tree in post-order (Left -> Right -> Node).
    
    - **Time Complexity**: O(n)

### BinaryTree Methods

- **insertNode(val)**: Inserts a node into the binary tree.
    
    - **Time Complexity**: O(log n) on average, O(n) in the worst case
- **searchValue(val)**: Searches for a value in the binary tree.
    
    - **Time Complexity**: O(log n) on average, O(n) in the worst case
- **traversePreOrder()**: Traverses the tree in pre-order.
    
    - **Time Complexity**: O(n)
- **traverseInOrder()**: Traverses the tree in in-order.
    
    - **Time Complexity**: O(n)
- **traversePostOrder()**: Traverses the tree in post-order.
    
    - **Time Complexity**: O(n)
- **isBST()**: Checks if the tree is a binary search tree.
    
    - **Time Complexity**: O(n)

## Graph

A graph is a collection of nodes (vertices) and edges connecting pairs of nodes. This implementation uses an adjacency list.

### Methods

- **addVertex(vertex)**: Adds a vertex to the graph.
    
    - **Time Complexity**: O(1)
- **addEdge(vertex1, vertex2)**: Adds an edge between two vertices.
    
    - **Time Complexity**: O(1)
- **DFS(start)**: Performs Depth-First Search starting from a vertex.
    
    - **Time Complexity**: O(V + E)
- **BFS(start)**: Performs Breadth-First Search starting from a vertex.
    
    - **Time Complexity**: O(V + E)
- **dijkstra(start, end)**: Finds the shortest path between two vertices using Dijkstra's algorithm.
    
    - **Time Complexity**: O(V^2)

## LinkedList

A linked list is a linear data structure where each element is a separate object. Each element (node) contains a value and a reference (link) to the next node in the sequence.

### Methods

- **insert(val)**: Inserts an element at the end of the linked list.
    
    - **Time Complexity**: O(n)
- **delete(val)**: Deletes an element from the linked list.
    
    - **Time Complexity**: O(n)
- **search(val)**: Searches for an element in the linked list.
    
    - **Time Complexity**: O(n)
- **hasCycle()**: Checks if the linked list has a cycle.
    
    - **Time Complexity**: O(n)

## MinMaxStack

A MinMaxStack is a stack that supports retrieving the minimum and maximum values in constant time.

### Methods

- **push(item)**: Pushes an item onto the stack.
    
    - **Time Complexity**: O(1)
- **pop()**: Pops an item off the stack.
    
    - **Time Complexity**: O(1)
- **getMin()**: Retrieves the minimum value in the stack.
    
    - **Time Complexity**: O(1)
- **getMax()**: Retrieves the maximum value in the stack.
    
    - **Time Complexity**: O(1)
- **peek()**: Peeks at the top item of the stack without removing it.
    
    - **Time Complexity**: O(1)
- **isEmpty()**: Checks if the stack is empty.
    
    - **Time Complexity**: O(1)