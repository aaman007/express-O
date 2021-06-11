const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const loggerMw = require('./middlewares/logger');

const booksRoutes = require('./routes/books');

// Apply middlewares
// logger middleware
app.use(loggerMw);
// body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Routes
app.use('/api/v1/books', booksRoutes);

// Set static folders
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT);