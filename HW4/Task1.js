const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
}


Object.defineProperties(person,{
    firstName: {writable: false},
    lastName: {writable: false},
    age: {writable: false},
    email: {writable: false}
});

Object.defineProperty(person, "updateInfo", {
    value: function(obj){
        for(key in obj){
            if(key in this && Object.getOwnPropertyDescriptor(this, key).writable){
                this[key] = obj[key];
            }
        }
    },
    writable: false
});

Object.defineProperty(person, 'address', {
    writable: true,
    enumerable: false,
    configurable: false,
    value: {}
})



//test
person.updateInfo({
    firstName: "Mikita", 
    age: 20, 
    address: {city: "New-York" } 
});

console.log(person.firstName); 
console.log(person.age); 
console.log(person.address);