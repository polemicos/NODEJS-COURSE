//i used Yates-Shuffle algorythm
const customShuffle = (arr) => {
    for (let i= arr.length-1; i>0; i--){
        const rnd =Math.floor(Math.random()*(i + 1));
        [arr[i], arr[rnd]]=[arr[rnd], arr[i]];
    }
    return arr;
}

//test
const arr = [1,2,3,4,5];
console.log(arr);
console.log(customShuffle(arr));
