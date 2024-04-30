const chunkArray = function(arr, chunkSize) {
    const res= [];
    for(let i=0; i<arr.length; i+=chunkSize) {
        res.push(arr.slice(i, i+chunkSize));
    }
    return res;
};

//test

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(chunkArray(arr, 3));
console.log(chunkArray(arr, 2));
console.log(chunkArray(arr, 5));