const booksService = require('../models/Book')

exports.bookList = (req, res) => {
    res.json(booksService.listBooks());
}

exports.bookDetail = (req, res) => {
    try {
        const book = booksService.retrieveBook(req.params.id);
        res.json(book);
    }
    catch {
        res.status(404).json({'detail': 'Not Found'})
    }
}

exports.bookCreate = (req, res) => {
    const book = booksService.createBook(req.body);
    return res.status(201).json(book);
}

exports.bookUpdate = (req, res) => {
    try {
        const book = booksService.updateBook(req.params.id, req.body);
        return res.json(book);
    }
    catch {
        res.status(404).json({'detail': 'Not Found'})
    }
}

exports.bookDelete = (req, res) => {
    try {
        booksService.deleteBook(req.params.id);
        res.status(204).send('');
    }
    catch {
        res.status(404).json({'detail': 'Not Found'})
    }
}