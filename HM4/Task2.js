const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

Object.defineProperties(product, {
    price: {writable: false, enumerable: false},
    quantity: {writable: false, enumerable: false}
});

const getTotalPrice = function(product){
    return Object.getOwnPropertyDescriptor(product, 'price').value * Object.getOwnPropertyDescriptor(product, 'quantity').value; 
}

const deleteNonConfigurable = function(obj, prop){
    if(Object.getOwnPropertyDescriptor(obj, prop).configurable){
        delete obj[prop];
    }
    else{
        throw new Error('Non-configurable property');
    }
}

//test
console.log(getTotalPrice(product)); 

try {
    deleteNonConfigurable(product, 'price');
} catch (error) {
    console.log(error.message); 
}

console.log(product); 