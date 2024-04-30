const getArrayIntersection = function(arr1, arr2){
    const res = [];
    for(let item of arr1){
        if(arr2.includes(item)){
            res.push(item);
        }
    }
    return res;
}


const getArrayUnion = function(arr1, arr2){
    const res = arr1.concat(arr2);
    const match = getArrayIntersection(arr1, arr2);
    for(let i=0; i<res.length; i++){
        if(match.includes(res[i])){
            res.splice(i, 1);
            i--;
        }
    }
    return res;
}

//test
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(getArrayIntersection(arr1, arr2));
console.log(getArrayUnion(arr1, arr2));