"use strict";
var fs = require('fs');

var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var upload = multer(); // for parsing multipart/form-data
var app = express();

function corsMiddleware(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
}

function errCallback(err) {
    if (err) {
        console.log(err.message);
    }
}

function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}

app.use(corsMiddleware);
app.use(bodyParser.json({limit: '100mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static('./'));
app.use('/cdn', express.static('./libs'));
app.use('/data', express.static('./data'));
app.use('/demohelp', express.static('./demohelp'));
app.get('/', function (req, res) {
    res.redirect('/index.html');
});


app.listen(8811, function () {
    console.log('Server listening on port 8811!');
});
