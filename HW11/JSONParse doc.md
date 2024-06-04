### 1. Documentation
#### Main Function

- `myJSONParse(JSON)`: The main function that initializes the index (`ind`) and tokenizes the input JSON string.

#### Tokenize Function

- **Tokenize**: This function converts the input JSON string into an array of tokens using regular expressions.
    - **Patterns**: Various regex patterns are used to identify different JSON elements.
    - **While Loop**: The loop iterates over the input string and matches tokens using regex patterns. Matched tokens are added to the `tokens` array, and the input string is sliced accordingly.

#### Parse Functions

- **parseValue**: Determines the type of the next token and delegates to the appropriate parsing function.
- **parseObject**: Parses a JSON object by reading key-value pairs until the closing `}`.
- **parseArray**: Parses a JSON array by reading values until the closing `]`.
- **parseString**: Parses a JSON string by handling escape sequences and Unicode characters.
- **parseBoolean**: Parses a JSON boolean.
- **parseNull**: Parses the JSON `null` value.
- **parseNumber**: Parses a JSON number.

#### Error Handling

The function throws `SyntaxError` with informative messages for unexpected tokens, invalid escape sequences, and incomplete or improperly formatted JSON structures.


### 2. Reflection

The most challenging thing was implementing the parsing system. Handling nested structures requires deep understanding of the rules they were built on, esspecially parsing strings. Managing the recursion depth and ensuring the correct interpretation of nested elements was essential. 

Tokenization was also quite challenging.  At the very beginning I've tried to build a hell-long regular expression to catch any possible token, and, obviously, gave up with that idea after several failed attempts. Making different regular expressions for significant cases is easier and more readable, yet not that elegant :)

Error handling was quite 'on the way', cause I was getting errors all the time. Yet some cases were crucial to handle.

Summing up, implementing such parser from scratch was a demanding task enhanced my understanding of regex and parsing algorithms. Attention to details, revision of complex themes and lots of time and patience were very important to complete this task.