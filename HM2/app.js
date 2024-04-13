const Transform = {
    
    stringifyValue: function(val){
        if(typeof val === 'object' || Array.isArray(val)) return JSON.stringify(val);
        else return String(val);
    },

    invertBoolean: function(val) {
        if(typeof val === 'boolean') return !val;
        else throw new Error('Provided value is not a boolean.');
    },

    convertToNumber: function(val){
        if(typeof val === 'number') return val;
        else if(typeof val === 'string'){
            if(val.includes('.')) return parseFloat(val);
            else return parseInt(val);
        }
        else if(typeof val === 'boolean') return Number(val);
        else if(Number(isNaN(val))) throw new Error('Conversion of this value to a number is impossible.');
    },

    coerceToType: function(val, type){
        switch(type){
            case 'string':
                return String(val);
            case 'number':
                return this.convertToNumber(val);
            case 'boolean':
                if(typeof val==='number') return val==0 ? false : true;
                if(typeof val==='string') return val=="" ? false : true;
            default: throw new Error('Unsupported coercion');
        }
    },

    addValues: function(val1, val2){
        if(Array.isArray(val1) && Array.isArray(val2)) return val1.concat(val2);
        if(Array.isArray(val1)) return val1.concat([val2]);
        if(Array.isArray(val2)) return [val1].concat(val2);
        
        if(typeof val1==='number' && typeof val2==='number') return val1 + val2;
        if(typeof val1==='bigint' && typeof val2==='bigint') return val1 + val2;
        if(typeof val1==='string' && typeof val2==='string') return val1 + val2;
        if(typeof val1==='boolean' && typeof val2==='boolean') return val1 || val2;
        


        else throw new Error("Impossible operation.");
    },
    
}



console.log(Transform.stringifyValue(5));
console.log(Transform.stringifyValue({ a: 1, b: 2 }));
console.log(Transform.stringifyValue(true));

console.log(Transform.invertBoolean(true));
console.log(Transform.invertBoolean(false));
//console.log(Transform.invertBoolean(5));

console.log(Transform.convertToNumber("10"));
console.log(Transform.convertToNumber("5.25"));
console.log(Transform.convertToNumber(true));

console.log(Transform.coerceToType("5", "number"));
console.log(Transform.coerceToType(true, "string"));
console.log(Transform.coerceToType("", "boolean"));

console.log(Transform.addValues([1, 2], [3, 4])); 
console.log(Transform.addValues([1, 2], 3)); 
console.log(Transform.addValues(1, [2, 3])); 
console.log(Transform.addValues(2, 3)); 
console.log(Transform.addValues("hello ", "world")); 

console.log(Transform.addValues(true, false)); 
