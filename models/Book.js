const uuid = require('uuid');
const database = require('./database');

class Book {
    constructor(title, author) {
        this.id = uuid.v4();
        this.title = title;
        this.author = author;
    }
}

exports.listBooks = () => {
    return Object.keys(database.books).map(key => database.books[key]);
}

exports.retrieveBook = id => {
    if (database.books[id])
        return database.books[id];
    throw Error;
}

exports.createBook = book => {
    const _book = new Book(book.title, book.author);
    database.books[_book.id] = _book;
    return _book;
}

exports.updateBook = (id, book) => {
    if (database.books[id]) {
        database.books[id].title = book.title;
        database.books[id].author = book.author;
        return book;
    }
    throw Error;
}

exports.deleteBook = id => {
    if (database.books[id]) {
        delete database.books[id];
        return;
    }
    throw Error;
}