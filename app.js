/**
 * Created by toq on 11/05/15.
 */
var express = require('express');
var app = express();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');

var bodyParser = require('body-parser');

var Book = require('./models/bookModel');

app.use(express.static('public'));

app.get('/books', function(request, response) {
    Book.find(function(error, books) {
       if (error) {
           response.status(500).send(error);
       } else {
           response.json(books);
       }
    });
});

app.get('/books/:bookId', function(request, response) {
    Book.findById(request.params.bookId, function(error, book) {
       if (error) {
           response.status(500).send(error);
       } else {
           response.json(book);
       }
    });
});

app.listen(3000, function () {
    console.log('listening on port 3000 by dennis');
});








