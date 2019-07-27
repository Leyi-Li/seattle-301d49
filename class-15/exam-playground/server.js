'use strict'

//Application Dependencies
const express = require('express');
const pg = require('pg');

// Environment variables
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({ extended: true }));
// Specify a directory for static resources
app.use(express.static('./public'));

// Database Setup: if you've got a good DATABASE_URL
if (process.env.DATABASE_URL) {
    const client = new pg.Client(process.env.DATABASE_URL);
    client.connect();
    client.on('error', err => console.error(err));
}

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// listen for requests
app.listen(PORT, () => console.log('Listening on port:', PORT));

// API Routes
app.get('/fun', (request, response) => {
    // test out your routes, perhaps ejs views or database stuff
    var object = {"books": [
        {"id": 1, "title": "Alice in Wonderland", "author": "Lewis Carroll"},
        {"id": 2, "title": "Hitchhiker's Guide to the Galaxy", "author": "Douglas Adams"},
        {"id":3, "title": "Mort", "author": "Terry Pratchett"}
    ]};
    response.render('../views/fun.ejs',{books:object.books});
});
