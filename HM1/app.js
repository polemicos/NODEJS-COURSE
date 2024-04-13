String.prototype.plus = function(str){
    let first = separate(this);
    let second = separate(str);
    let reminder = 0;
    let res = '';
    for(let i = first.length-1, j = second.length-1; i >= 0 || j >= 0 || reminder > 0; i--, j--){
        const sum = (i >= 0 ? first[i] : 0) + (j >= 0 ? second[j] : 0) + reminder;
        reminder = sum / 10 | 0;
        res = sum % 10 + res;
    }

    return res;
    
}

String.prototype.minus = function(str){
    let first = separate(this);
    let second = separate(str);
    let res = '';
    let borrow = 0;
    
    if (compare(this, str)) {
        for(let i = first.length - 1, j = second.length - 1; i >= 0 || j >= 0; i--, j--){
            let digit1 = (i >= 0 ? first[i] : 0) - borrow;
            let digit2 = j >= 0 ? second[j] : 0;
            
            if (digit1 < digit2) {
                digit1 += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            
            let diff = digit1 - digit2;
            res = diff + res;
        }
        
        res = res.replace(/^0+/, '');
        return res;
    } else {
        throw new Error("The first number must be greater than or equal to the second!");
    }
}


String.prototype.divide = function(str){
    if(str === '0') throw new Error('Division by zero!');
    if(this == str) return '1';

    let first = separate(this);
    let second = parseInt(str);
    let remainder = 0;
    let res = '';

    for(let i = 0; i < first.length; i++) {
        remainder = remainder * 10 + first[i];
        let quotient = ~~(remainder / second); 
        res += quotient; 
        remainder %= second; 
    }
    res = res.replace(/^0+/, '');
    return res;
}



String.prototype.multiply = function(str){
    let first = separate(this); 
    let second = separate(str); 
    let res = '0';

    for (let i = first.length - 1; i >= 0; i--) {
        let temp = '';
        let remainder = 0;

        for (let j = second.length - 1; j >= 0; j--) {
            let tempMult = first[i] * second[j] + remainder;
            temp = (tempMult % 10) + temp;
            remainder = tempMult / 10 | 0;
        }

        temp = remainder > 0 ? remainder + temp : temp;
        temp += '0'.repeat(first.length - 1 - i);
        res = res.plus(temp); 
    }

    return res;
};

let separate = function(str){
        let res = [];
        for (const char of str) {
            res.push(parseInt(char));
        }
        return res;
    }

    

let compare = function(str1, str2){
    let first = separate(str1);
    let second = separate(str2);
    let fSum =first[first.length-1], sSum =second[second.length-1]; 
    for(let i=first.length-2, j = 1; i>=0; i--, j++){
        fSum+=first[i]*pow(10, j);
    }
    for(let i=second.length-2, j=1; i>=0; i--, j++){
        sSum+=second[i]*pow(10, j);
    }
    if(fSum>=sSum){
        return true;
    }else return false;
}

let pow = function(num, power){
    if (power === 0) {
        return 1; 
    }
    if (power === 1) {
        return num; 
    }
    if (power < 0) {
        return 1 / pow(num, -power); 
    }
    let res = 1;
    for(let i = 1; i <= power; i++){
        res *= num;
    }
    return res;
}


let test = "4444400000000";
console.log("Sum: " + test.plus("99"));
console.log("Substraction: " + test.minus("2"));
console.log("Division: " + test.divide("22"));
console.log("Multiplication: " + test.multiply("5"));



