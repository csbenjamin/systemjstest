var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/module2/index.js', function (req, res) {
    //setTimeout(function(){
        res.sendFile(__dirname + '/module2/index.js');
    //}, 100);
});

app.get('/module1/index*.js', function (req, res) {
    //setTimeout(function() {
        res.send('import dependence from "./dependence";\nexport default "module1";');
    //}, 100);
});

app.get('/module1/dependence.js', function (req, res) {
    //setTimeout(function() {
        res.sendFile(__dirname + '/module1/dependence.js');
    //}, 100);
});

app.get('/config.js', function (req, res) {
    //setTimeout(function() {
        res.sendFile(__dirname + '/config.js');
    //}, 100);
});

app.get('/app.js', function (req, res) {
    //setTimeout(function() {
        res.sendFile(__dirname + '/app.js');
    //}, 100);
});

app.get('/jspm_packages/*', function (req, res) {
    //setTimeout(function() {
        res.sendFile(__dirname + req.url);
    //}, 100);
    //res.sendFile(__dirname + '/config.js');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});