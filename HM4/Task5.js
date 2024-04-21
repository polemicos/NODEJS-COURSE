const observeObject = function(obj, callback){
    return new Proxy(obj, {
        get(target, prop, receiver){
            callback(prop, 'get');
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver){
            callback(prop, 'set');
            return Reflect.set(target, prop, value, receiver);
        }
    });
}



//test
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

const observce = observeObject(person, (prop, callback) => {console.log(`\n${callback}ter was called for ${prop}`);});
console.log(observce.firstName);
observce.lastName = "Piper";
console.log(observce.lastName);
