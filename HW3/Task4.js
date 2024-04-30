const calculateFactorial = function(num, acc=1){
    if(num<0){
        return "Try a positive number."
    }
    if(num === 0){
        return acc;
    }
    return calculateFactorial(num - 1, num * acc);
};

console.log(calculateFactorial(4));
console.log(calculateFactorial(25));
console.log(calculateFactorial(-5));

/////////////////////////////////


const power = function(num, pow){
    if(pow === 0){
        return 1;
    }
    else if(pow === 1){
        return num;
    }
    else if (pow < 0) {
        return 1 / power(num, -pow); 
    }
    else{
        return num * power(num, pow - 1);
    }
}

console.log(power(2,-1));
console.log(power(2,0));
console.log(power(2,1));
console.log(power(2,2));