const express = require('express');
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');
const promisify = require('es6-promisify');

const routes = require('./routes/index');

// GraphQL Schema


const app = express();


app.use(logger('dev'));

// Handle our routes!
app.use('/', routes);

// Graph QL endpoint
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true,
})));

// done! we export it so we can start the site in start.js
module.exports = app;
