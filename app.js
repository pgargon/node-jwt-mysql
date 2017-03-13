/**
 * Created by pablo on 10/3/17.
 */
var express = require("express");
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

var logger = require('morgan');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

var mysql = require('mysql');

var connection = mysql.createConnection(config.database);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});