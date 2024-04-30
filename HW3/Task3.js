const createCounter = function () {
    let counter = 0;
    return function () {counter++; return counter}
};

const counter1 = createCounter();
const counter2 = createCounter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
///////////////////////////

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

repeatFunction(createCounter(),2);
repeatFunction(createCounter(),0);
//repeatFunction(createCounter, -5);