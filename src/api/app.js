var API = require('./api');
var knex = require('./db');

var app = new API(knex);

app.start(3000);
