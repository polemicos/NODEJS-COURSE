const deepCloneObject = function(original){
    if(typeof original !== 'object' || original === null){
        return original;
    }
    const clone = Array.isArray(original)? []:{};

    for(let key in original){
        if(original.hasOwnProperty(key)){
            clone[key] = createImmutableObject(original[key]);
        }
    }
    return Object.assign(clone, original);
    
};

//test
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: ["john.doe@example.com", null],
    children: [{
        firstName: "Mikita",
        lastName: "Doe"
        },
        {firstName: "Ivan",
        lastName: "Doe"}
    ]
};


const clone = createImmutableObject(person);
console.log(person);
console.log(clone);
