const measureArrayPerformance = function(func, arr){
    let start = performance.now();
    func(arr);
    let end = performance.now();
    let time = end - start;
    console.log(`${func.name} took ${time} ms to perform`);
}


//tests
const customMap = function(arr) {
    return arr.map(item => item * 2); 
}

const customFilter = function(arr) {
    return arr.filter(item => item % 2 === 0);
}

const customReduce = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}


const customShuffle = (arr) => {
    for (let i= arr.length-1; i>0; i--){
        const rnd =Math.floor(Math.random()*(i + 1));
        [arr[i], arr[rnd]]=[arr[rnd], arr[i]];
    }
    return arr;
}

const chunkArray = function(arr, chunkSize) {
    const res= [];
    for(let i=0; i<arr.length; i+=chunkSize) {
        res.push(arr.slice(i, i+chunkSize));
    }
    return res;
};



const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

measureArrayPerformance(customMap, testArray);
measureArrayPerformance(customFilter, testArray);
measureArrayPerformance(customReduce, testArray);
measureArrayPerformance(customShuffle, testArray);
measureArrayPerformance(chunkArray, testArray);
measureArrayPerformance(chunkArray, testArray);
