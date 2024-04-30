function multiply(a, b, c) {
	return a * b * c;
}


const curry = function(func, arity){
    return curried = (...args)=>{
        if(arity !== args.length){
            return curried.bind(null, ...args);
        }
        return func(...args);
    }
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(3); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

console.log("Result:", result); // Expected: 24