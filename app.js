const express = require('express');
const graphqlHTTP = require('express-graphql');

const routes = require('./routes/index');

const app = express();


// Handle our routes!
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;
