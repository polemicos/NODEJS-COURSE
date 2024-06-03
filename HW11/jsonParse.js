
// Main function
function myJSONParse(JSON) {
    let ind = 0; // Main index to iterate through tokens array
    const tokens = tokenize(JSON); // Tokens array
    
    // Tokenize function
    function tokenize(input) {
        const tokens = [];
        // Regex patterns for different elements of a JSON string
        const patterns = {
            whitespace: /^\s+/,
            true: /^true/,
            false: /^false/,
            null: /^null/,
            objectStart: /^{/,
            objectEnd: /^}/,
            arrayStart: /^\[/,
            arrayEnd: /^\]/,
            comma: /^,/,
            colon: /^:/,
            string: /^"(?:\\u[0-9a-fA-F]{4}|\\["\\/bfnrt]|[^"\\])*"/,
            number: /^-?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?/
        };

        while (input) {
            // A loop looking for matches in the input JSON string and adding them to the tokens array
            if (patterns.whitespace.test(input)) {
                input = input.replace(patterns.whitespace, '');
            } else if (patterns.true.test(input)) {
                tokens.push('true');
                input = input.slice(4);
            } else if (patterns.false.test(input)) {
                tokens.push('false');
                input = input.slice(5);
            } else if (patterns.null.test(input)) {
                tokens.push('null');
                input = input.slice(4);
            } else if (patterns.objectStart.test(input)) {
                tokens.push('{');
                input = input.slice(1);
            } else if (patterns.objectEnd.test(input)) {
                tokens.push('}');
                input = input.slice(1);
            } else if (patterns.arrayStart.test(input)) {
                tokens.push('[');
                input = input.slice(1);
            } else if (patterns.arrayEnd.test(input)) {
                tokens.push(']');
                input = input.slice(1);
            } else if (patterns.comma.test(input)) {
                tokens.push(',');
                input = input.slice(1);
            } else if (patterns.colon.test(input)) {
                tokens.push(':');
                input = input.slice(1);
            } else if (patterns.string.test(input)) {
                const match = patterns.string.exec(input)[0];
                tokens.push(match);
                input = input.slice(match.length);
            } else if (patterns.number.test(input)) {
                const match = patterns.number.exec(input)[0];
                tokens.push(match);
                input = input.slice(match.length);
            } else {
                // Invalid token error handling
                throw new SyntaxError(`Unexpected token in JSON at position ${tokens.length}`);
            }
        }
        return tokens;
    }

    // Common parse function, dicides which parser should handle given token
    function parseValue() {
        
        if (ind >= tokens.length) {
            throw new SyntaxError("Unexpected end of JSON input"); // Prevents index out of range error
        }
        const token = tokens[ind];
        if (token === '{') return parseObject();
        if (token === '[') return parseArray();
        if (token[0] === '"') return parseString();
        if (token === 'true' || token === 'false') return parseBoolean();
        if (token === 'null') return parseNull();
        if (/^-?\d/.test(token)) return parseNumber();
        throw new SyntaxError(`Unexpected token ${token}`); // Invalid token error handling
    }

    // Object parser
    function parseObject() {

        const obj = {};
        ind++; // Skip '{'
        let first = true; // First pair flag
        while (ind < tokens.length) {
            if (tokens[ind] === '}') { // Checks if it's the end of the object definition
                ind++;
                return obj;
            }
            if (!first) {
                if (tokens[ind] !== ',') {
                    throw new SyntaxError(`Expected ',' in object, but got ${tokens[ind]}`); // Checks if there;s an unexpected symbol in the object definition after the first pair
                }
                ind++;
            }
            const key = parseString(); // Parsing key
            if (tokens[ind] !== ':') {
                throw new SyntaxError(`Expected ':' in object, but got ${tokens[ind]}`);
            }
            ind++;
            const value = parseValue(); // Parsing value
            obj[key] = value;
            first = false;
        }
        throw new SyntaxError("Unexpected end of JSON input in object"); // Handling no closing bracket error
    }

    // Array parser
    function parseArray() {
        const arr = [];
        ind++; // Skip '['
        let first = true; // First elemnt flag
        while (ind < tokens.length) {
            if (tokens[ind] === ']') { // Checks if it's the end of the array definition
                ind++;
                return arr;
            }
            if (!first) {
                if (tokens[ind] !== ',') {
                    throw new SyntaxError(`Expected ',' in array, but got ${tokens[ind]}`); // Checks if there;s an unexpected symbol in the array definition after the first element
                }
                ind++;
            }
            const val = parseValue(); // Parsing an array element
            arr.push(val);
            first = false;
        }
        throw new SyntaxError("Unexpected end of JSON input in array"); // Handling no closing bracket error
    }

    // String parser
    function parseString() {
        const token = tokens[ind++].slice(1, -1); // Remove the surrounding quotes
        let res = '';
        for (let i = 0; i < token.length; i++) { // Loop through the string token
            const char = token[i];
            if (char === '\\') { // Checks if there's an escape character
                const nextChar = token[++i];
                switch (nextChar) { // Switch building the result string 
                    case '"':
                    case '\\':
                    case '/':
                        res += nextChar;
                        break;
                    case 'b':
                        res += '\b';
                        break;
                    case 'f':
                        res += '\f';
                        break;
                    case 'n':
                        res += '\n';
                        break;
                    case 'r':
                        res += '\r';
                        break;
                    case 't':
                        res += '\t';
                        break;
                    case 'u': // Handlling unicode characters
                        const hex = token.slice(i + 1, i + 5);
                        if (!/^[0-9a-fA-F]{4}$/.test(hex)) { // Handling invalid hex code characters
                            throw new SyntaxError(`Invalid Unicode escape sequence \\u${hex}`);
                        }
                        res += String.fromCharCode(parseInt(hex, 16));
                        i += 4;
                        break;
                    default:
                        throw new SyntaxError(`Invalid escape character \\${nextChar}`); // Handling invalid escape characters error
                }
            } else {
                res += char; // Adding regular character
            }
        }
        return res;
    }

    // Boolean parser
    function parseBoolean() {
        const token = tokens[ind++];
        return token === 'true';
    }

    // Null parser
    function parseNull() {
        ind++;
        return null;
    }

    // Number parser
    function parseNumber() {
        const token = tokens[ind++];
        return Number(token);
    }

    const res = parseValue();
    if (ind < tokens.length) {
        throw new SyntaxError("Unexpected token after JSON input"); // Handling unexpected tokens after input string error
    }
    return res;
}






// Test cases

  
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);

console.log(jsonObject); // Should output the parsed JavaScript object.





