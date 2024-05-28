### 1. Documentation

#### HashTable Class

The `Hashtable` class implements a hash table data structure with separate chaining for collision handling. The class has the following components:

- **Constructor `Hashtable(data)`**:
    
    - Initializes the hash table.
    - `this.size` is set to the length of the input data array.
    - `this.table` is populated using the `populate` method which initializes each index with a linked list and inserts each data element.
- **`hashFunc(str)`**:
	- Inspired by DJB2 hash function, which is simple and performs well in many cases.
    - Computes a hash value for a given string using a custom hash function.
    - Uses a prime number (37) for hashing.
    - The hash value is calculated by iterating through the string characters and updating the hash value using multiplication and modulo operations.
- **`populate(data)`**:
    
    - Creates an array of linked lists with the same size as the input data length.
    - Inserts each element from the data array into the hash table using the hash function to determine the index.
- **`search(searchedValue)`**:
    
    - Searches for a value in the hash table.
    - Uses the hash function to find the index and then searches within the linked list at that index.
- **`insertKeyValue(value)`**:
    
    - Inserts a new value into the hash table.
    - Uses the hash function to find the appropriate index and inserts the value into the linked list at that index.
- **`deleteKeyValue(value)`**:
    
    - Deletes a value from the hash table.
    - Uses the hash function to find the index and deletes the value from the linked list at that index.


### 2. Analysis

#### Performance Analysis

- **Insertion**:
    
    - **Time Complexity**: O(1) on average for calculating the hash and O(n) in the worst case for inserting in the linked list if all elements collide.
    - **Explanation**: Calculating the hash value is O(k), where k is the length of the string. Inserting at the end of the linked list is O(n) in the worst case, where n is the number of elements in the list at that index.
- **Retrieval**:
    
    - **Time Complexity**: O(1) on average and O(n) in the worst case.
    - **Explanation**: The hash calculation is O(k). Searching within the linked list is O(n) in the worst case if all elements are in the same linked list.
- **Deletion**:
    
    - **Time Complexity**: O(1) on average and O(n) in the worst case.
    - **Explanation**: Similar to insertion and retrieval, calculating the hash is O(k). Deleting within the linked list is O(n) in the worst case.

#### Trade-offs

- **Collision Handling**:
    
    - The implementation uses separate chaining with linked lists to handle collisions. This is simple and effective but can lead to longer linked lists if many elements hash to the same index, affecting performance.
- **Hash Function**:
    
    - The custom hash function uses a prime number and character multiplication to distribute keys. While it is simple, it may not provide optimal distribution for all types of data, potentially leading to more collisions.
- **Linked List**:
    
    - Linked lists are used for their simplicity in handling collisions. However, searching and deleting in a linked list can become slow if there are many collisions.