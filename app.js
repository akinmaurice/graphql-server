const express = require('express');
const graphqlHTTP = require('express-graphql');

import schema from './graphql';

const app = express();
