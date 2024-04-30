const lazyMap = function(arr, map){
    let i = 0;
    return{
        next: function(){
            return i<arr.length? {value: map(arr[i++]), done: false} : {done: true}; 
        }
    };
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const generator = lazyMap(arr, x => x * x);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
/////////////////////////////////////////////////



const fibonacciGenerator = function(){
    let first = 0;
    let second = 1;
    return{
        next: function(){
            let res = first;
            let tmp = first;
            first = second;
            second += tmp;
            return {value: res, done: false};
        }
    };
}

const fibonacci = fibonacciGenerator();

console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());