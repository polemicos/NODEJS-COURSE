// Class representing a Book
class Book {
    constructor(title, author, isbn, price, availability) {
        this.title = title; // Title of the book
        this.author = author; // Author of the book
        this.isbn = isbn; // ISBN (International Standard Book Number) of the book
        this.price = price; // Price of the book
        this.availability = availability; // Number of available copies of the book
    }

    // Method to get information about the book
    getInfo() {
        return `\n${this.title} by ${this.author} - ${this.price}$`;
    }
}

// Class representing a User
class User {
    static lastId = 0; // Static property to keep track of the last assigned user ID
    constructor(name, email) {
        this.name = name; // Name of the user
        this.email = email; // Email address of the user
        this.userId = ++User.lastId; // Unique ID assigned to the user
        Object.defineProperty(this, 'userId', { writable: false }); // Making userId property immutable
        this.cart = new Cart(this); // Creating a new Cart for the user
    }

    // Method to place an order
    placeOrder(fromCart, books) {
        let order;
        if (fromCart) {
            order = new Order(this); // Creating a new Order from the user's cart
        } else {
            order = new Order(this, false); // Creating a new Order without using the cart
            order.chooseBooks(books); // Choosing specific books for the order
        }
        return order; // Returning the created order
    }

    // Method to get user information
    getUserInfo() {
        console.log(`Id: ${this.userId}, Name: ${this.name}`);
    }
}

// Class representing a Cart
class Cart {
    constructor(user) {
        this.user = user; // User associated with the cart
        this.books = []; // Array to store books in the cart
    }

    // Method to add a book to the cart
    add(book) {
        this.books.push(book);
    }

    // Method to remove a book from the cart based on its ISBN
    remove(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    // Method to calculate the total price of all books in the cart
    getTotalPrice() {
        return this.books.reduce((totalPrice, book) => totalPrice + book.price, 0);
    }

    // Method to display the contents of the cart
    showCart() {
        console.log('Cart:');
        this.books.forEach(book => {
            console.log(`\n${book.getInfo()}`);
        });
    }
}

// Class representing an Order
class Order {
    static lastId = 0; // Static property to keep track of the last assigned order ID

    constructor(user, fromCart = true) {
        this.user = user; // User associated with the order
        this.orderId = ++Order.lastId; // Unique ID assigned to the order
        if (fromCart) {
            this.orderedBooks = user.cart.books; // Getting books from user's cart
            this.totalPrice = user.cart.getTotalPrice(); // Calculating total price from user's cart
        }
    }

    // Method to choose specific books for the order
    chooseBooks(books) {
        this.orderedBooks = books; // Assigning specific books to the order
        this.totalPrice = this.getTotalPrice(books); // Calculating total price for the chosen books
    }

    // Method to calculate the total price of the ordered books
    getTotalPrice() {
        return this.orderedBooks.reduce((totalPrice, book) => totalPrice + book.price, 0);
    }

    // Method to display details of the order
    getOrderDetails() {
        console.log(`\n\nOrder ${this.orderId} placed by ${this.user.name}.`);
        if (this.orderedBooks) {
            console.log(`Ordered books:`);
            this.orderedBooks.forEach(book => console.log(book.getInfo()));
        } else {
            console.log("No books ordered.");
        }
        console.log(`Total Price: ${this.totalPrice}$`);
    }
}

// Class representing a FictionBook, inherits from Book
class FictionBook extends Book {
    constructor(title, author, isbn, price, availability) {
        super(title, author, isbn, price, availability); // Calling constructor of the superclass
        this.genre = "Fiction"; // Genre of the book
    }
}

// Class representing a NonFictionBook, inherits from Book
class NonFictionBook extends Book {
    constructor(title, author, isbn, price, availability) {
        super(title, author, isbn, price, availability); // Calling constructor of the superclass
        this.genre = "Non-Fiction"; // Genre of the book
    }
}

// Helper class with static methods for searching books
class Helper {
    // Method to search books by title
    static searchByTitle(books, searchedTitle) {
        return books.filter(book => book.title.toLowerCase().includes(searchedTitle.toLowerCase()));
    }

    // Method to search books by author
    static searchByAuthor(books, searchedAuthor) {
        return books.filter(book => book.author.toLowerCase().includes(searchedAuthor.toLowerCase()));
    }

    // Method to search books by ISBN
    static searchById(books, searchedId) {
        return books.filter(book => book.isbn.toLowerCase() === searchedId.toLowerCase());
    }
}








// Playground code: creating instances of books and users, adding books to carts, placing orders, and performing searches.
let books = [
    new NonFictionBook('The Basketball Diaries', 'Jim Caroll', '123D', 11.99, 40),
    new FictionBook('We', 'Yevgeny Zamyatin', '234E', 7.49, 20),
    new NonFictionBook('Każdy może zabić', 'Krystyna Rożnowska', '345W', 9.99, 20),
    new FictionBook('The Lord of the Rings', 'J. R. R. Tolkien', '221F', 5.99, 60),
    new FictionBook('Lord of the Flies', 'William Golding', '323E', 4.49, 17)
];

let users = [
    new User('Mikita Rakovich', 'mikitar@example.com'),
    new User('John Doe', 'johnd@example.com'),
    new User('Foo Bar', 'foob@example.com')
];

users[0].cart.add(books[0]);
users[0].cart.add(books[3]);
users[0].cart.add(books[4]);
users[1].cart.add(books[1]);
users[1].cart.add(books[2]);
users[1].cart.add(books[2]);
users[2].cart.add(books[4]);
users[2].cart.add(books[3]);





users.forEach(user => {
    user.getUserInfo();
    user.cart.showCart();
    user.cart.getTotalPrice();
    console.log('\n\n\n');
});


users[1].cart.showCart();
users[1].cart.remove('234E');
users[1].cart.showCart();

let order1 = users[0].placeOrder(true);
let order2 = users[1].placeOrder(false, books);
let order3 = users[2].placeOrder(false, [books[3], books[2]]);


order1.getOrderDetails();
order2.getOrderDetails();
order3.getOrderDetails();


console.log(Helper.searchByTitle(books, 'Lord'));
console.log(Helper.searchByAuthor(books, 'Krystyna Rożnowska'));
console.log(Helper.searchById(books, '323E'));
