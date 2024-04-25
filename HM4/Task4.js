const createImmutableObject = function(obj) {
    let res = {};

    for(let key in obj) {
        if(typeof obj[key] === "object" && obj[key]!==null) {
            if(Array.isArray(obj[key])){
                res[key] = Object.freeze([...obj[key]]);
            }
            else res[key] = createImmutableObject(obj[key]); 
        }else {
            res[key] = obj[key]; 
        }
    }

    return Object.freeze(res);
}

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
newPerson.array[0] = 1;
console.log(newPerson.firstName);
console.log(newPerson.array);