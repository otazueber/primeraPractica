const express = require('express');
const handlebars = require('express-handlebars');
const mongoConnect = require('../db');
const router = require('./router');
const {port} = require('./config/app.config');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

mongoConnect();
router(app);


module.exports = app;