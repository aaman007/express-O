const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.bookList);
router.post('/', booksController.bookCreate);
router.get('/:id', booksController.bookDetail);
router.put('/:id', booksController.bookUpdate);
router.delete('/:id', booksController.bookDelete);

module.exports = router;