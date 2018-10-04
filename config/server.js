const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', './app/views');

//app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('app/routes')
//    .then('config/sns.js')
    .then('app/controllers')
    .into(app);

module.exports = app;
