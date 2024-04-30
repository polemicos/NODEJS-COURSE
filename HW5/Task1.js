const customFilterUnique = function(arr, callback) {
    const res = [];
    const uniqueValues = new Set();
    for(let item of arr) {
        if (callback(item, uniqueValues)) res.push(item);
    }
    return res;
};

const filterUniqueAge = function(item, uniqueAges) {
    if(typeof item === "object" && item.hasOwnProperty('age')) {
        if(!uniqueAges.has(item.age)) {
            uniqueAges.add(item.age);
            return true;
        }
    }
    return false;
};

const filterUniqueString = function(item, uniqueStrings) {
    if(typeof item === "string") {
        if(!uniqueStrings.has(item)) {
            uniqueStrings.add(item);
            return true;
        }
    }
    return false;
};


//tests
const people = [
    { name: 'Mikita', age: 20 },
    { name: 'David', age: 24 },
    { name: 'John', age: 24 },
    { name: 'Mari', age: 20 }
];

const uniqueAge = customFilterUnique(people, filterUniqueAge);
console.log(uniqueAge);


const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueStrings = customFilterUnique(strings, filterUniqueString);

console.log(uniqueStrings);