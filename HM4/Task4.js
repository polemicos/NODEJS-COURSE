const createImmutableObject = function(obj) {
    let res = {};

    for(let key in obj) {
        if(typeof obj[key] === "object" || Array.isArray(obj[key])) {
            res[key] = createImmutableObject(obj[key]); 
        }else {
            res[key] = obj[key]; 
        }

        Object.defineProperty(res, key,{
            writable: false,
            enumerable: true,
            configurable: false 
        });
    }

    return res;
}

//test
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};
const newPerson = createImmutableObject(person);
console.log(newPerson);

newPerson.firstName = "Mikita"; 
console.log(newPerson.firstName);