const express = require('express');
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');

const routes = require('./routes/index');


// GraphQL Schema
import schema from './graphql';


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
