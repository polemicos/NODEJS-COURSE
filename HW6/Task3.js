const multiline = function(static, ...tags){
    let lines = static.raw.join('').split('\n'); 
    let numLines = lines.length;
    let res = '';
    for(let i=1;i<numLines-1; i++){
        res+= i+' '+ lines[i] + '\n';
    }
    return res;
}


const code = multiline`
function add(a, b) {
return a + b;
}
`;





console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"