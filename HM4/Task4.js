const createImmutableObject = function(original) {
    if (typeof original !== 'object' || original === null) {
        return original;
    }
    const clone = Array.isArray(original) ? [] : {};

    for (let key in original) {
        if (original.hasOwnProperty(key)) {
            if (typeof original[key] === 'object' && original[key] !== null) {
                clone[key] = createImmutableObject(original[key]);
            } else {
                clone[key] = original[key];
            }
        }
    }

    for (let key in clone) {
        Object.defineProperty(clone, key, {
            writable: false,
            enumerable: true,
            configurable: false
        });
    }

    return clone;
};

//test
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    array: [0,1,2,3]
};
const newPerson = createImmutableObject(person);
console.log(newPerson);

newPerson.firstName = "Mikita";
newPerson.array[1] = 2;
console.log(newPerson.firstName);
console.log(newPerson.array);