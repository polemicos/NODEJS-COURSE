const Products = [
    {name: "Bread", price: 3},       
    {name: "Milk", price: 4.5},
    {name: "Eggs", price: 5.9},
    {name: "Juice", price: 3.4},
    {name: "Pasta", price: 4},
    {name: "Apples", price: 2.4},
    {name: "Bacon", price: 5.6},
    {name: "Beer", price: 3.5},
    {name: "Avocado", price: 8}
];

function calculateDiscountedPrice(products, discount){
    let discounted = [];
    products.forEach(product => {
        discounted.push({name: product.name, price: product.price - (product.price * discount / 100)});
    });
    return discounted;
}
////////////////////


function calculateTotalPrice(products){
    total = 0;
    products.forEach(product =>{
        total += product.price;
    });
    return total;
}

console.log(calculateDiscountedPrice(Products, 30));
console.log(calculateTotalPrice(Products));
console.log(calculateTotalPrice(calculateDiscountedPrice(Products, 50)));
console.log(Products);
