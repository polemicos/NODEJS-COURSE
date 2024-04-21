const validateObject = function(obj, scheme) {
    const props = [];
    const schemeProps = scheme.props;

    function isGetter(obj, prop) {
        return !!Object.getOwnPropertyDescriptor(obj, prop)['get'];
    }

    function isSetter(obj, prop) {
        return !!Object.getOwnPropertyDescriptor(obj, prop)['set'];
    }

    let hasGetters = false, hasSetters = false;

    for (let prop of schemeProps) {
        props.push(prop.name);
    }
    
    for (let key in obj) {
        if (isSetter(obj, key)){
            hasSetters = true;
            break;
        }
            
        if (isGetter(obj, key)){
            hasGetters = true;
            break;
        }
            
        
        if (!props.includes(key)) {
            return false;
        }
        let type;
        for (let prop of schemeProps) {
            if (key === prop.name) {
                type = prop.type;
                break;
            }
        }

        if (Array.isArray(obj[key])) {
            if (type !== 'array') {
                return false;
            }
        } else if (typeof obj[key] !== type) {
            return false;
        }



    }

    return hasSetters === scheme.hasSetters && hasGetters === scheme.hasGetters;
};

//test
const scheme1 = {
    props: [{ name: 'firstName', type: 'string' }, { name: 'func', type: 'function' }, { name: 'sampleObj', type: 'object' }],
    hasGetters: false,
    hasSetters: false
};

const obj1 = {
    firstName: "John",
    func: function() {},
    sampleObj: {}
};

console.log(validateObject(obj1, scheme1)); 

const scheme2 = {
    props: [{ name: 'lastName', type: 'string' }, { name: 'func2', type: 'function' }, { name: 'anotherObj', type: 'object' }],
    hasGetters: true,
    hasSetters: false
};

const obj2 = {
    lastName: "Doe",
    func2: function() {},
    anotherObj: {},
    get age() {
        return 25;
    }
};

console.log(validateObject(obj2, scheme2)); 
