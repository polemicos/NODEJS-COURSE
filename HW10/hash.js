class Hashtable {
    constructor(data) {
        // Initialize the size of the hash table based on the input data length
        this.size = data.length;
        // Populate the hash table with the provided data
        this.table = this.populate(data);
    }

    // Custom hash function to calculate hash value for a given string
    hashFunc(str) {
        const prime = 37; // Prime number used for hashing
        let val = str.charCodeAt(0); // Initialize hash value with the first character's ASCII code
        for (let i = 1; i < str.length; i++) {
            // Update hash value using multiplication and modulo operations
            val = (val * prime * str.charCodeAt(i)) % this.size;
        }
        return val; // Return the calculated hash value
    }

    // Populate the hash table with the provided data
    populate(data) {
        let table = [];
        // Initialize each index in the table with a new linked list
        for (let i = 0; i < this.size; i++) {
            table[i] = new LinkedList();
        }
        // Insert each data element into the hash table
        for (let i = 0; i < data.length; i++) {
            let ind = this.hashFunc(data[i]);
            table[ind].insert(data[i]);
        }
        return table; // Return the populated table
    }

    // Search for a value in the hash table
    search(searchedValue) {
        let ind = this.hashFunc(searchedValue); // Calculate the hash value
        return this.table[ind].search(searchedValue); // Search in the linked list at the calculated index
    }

    // Insert a new value into the hash table
    insertKeyValue(value) {
        let ind = this.hashFunc(value); // Calculate the hash value
        this.table[ind].insert(value); // Insert the value into the linked list at the calculated index
    }

    // Delete a value from the hash table
    deleteKeyValue(value) {
        let ind = this.hashFunc(value); // Calculate the hash value
        this.table[ind].delete(value); // Delete the value from the linked list at the calculated index
    }
}
// LinkedlList from the previous homework
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
        if (this.head === null) {
            this.head = newElem;
        } else {
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
        while (curr.nextElem !== null && curr.nextElem.value !== val) {
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

//Tests

let data1 = ['Hello', 'Mikita', 'Luke', 'some', 'BEER'];
let hashtable1 = new Hashtable(data1);

for (let i = 0; i < data1.length; i++) {
    console.log(`Hash value for '${data1[i]}': ${hashtable1.hashFunc(data1[i])}`);
}

console.log("Test inserting, retrieving, and deleting:");

console.log("Initial hashtable:");
console.log(hashtable1);

console.log("\nInserting 'world':");
hashtable1.insertKeyValue("world");

console.log("Hashtable after inserting 'world':");
console.log(hashtable1);

console.log("\nRetrieving 'world':");
console.log(hashtable1.search("world")); // Should return the linked list node containing "world"

console.log("\nDeleting 'world':");
hashtable1.deleteKeyValue("world");

console.log("Hashtable after deleting 'world':");
console.log(hashtable1);

console.log("\nRetrieving 'world' again:");
console.log(hashtable1.search("world")); // Should return "No such value"

// Test collision handling
console.log("\n\nTest collision handling:");

// Create a hashtable with a small size to induce collisions
let data2 = ['Hello', 'Mikita', 'Luke', 'some', 'BEER', 'World', 'Collision', 'Handling'];
let hashtable2 = new Hashtable(data2);

console.log("Hashtable with collisions:");
console.log(hashtable2);

console.log("\nRetrieving 'Mikita':");
console.log(hashtable2.search("Mikita")); // Should return the linked list node containing "Mikita"

console.log("\nRetrieving 'World':");
console.log(hashtable2.search("World")); // Should return the linked list node containing "World"

console.log("\nRetrieving 'Collision':");
console.log(hashtable2.search("Collision")); // Should return the linked list node containing "Collision"

console.log("\nRetrieving 'not-in-table':");
console.log(hashtable2.search("not-in-table")); // Should return "No such value"
