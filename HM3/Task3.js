const createCounter = (function () {
    let counter = 0;
    return function () {counter++; return counter}
})();


console.log(createCounter());
console.log(createCounter());
//////////////////////

const repeatFunction = function(func, num){
    if(num<0){
        while(true){
            console.log(func());
        }
    }
    else{
        for(let i=0;i<num;i++){
            console.log(func());
        }
    }
}

repeatFunction(createCounter,2);
repeatFunction(createCounter,0);
//repeatFunction(createCounter, -5);