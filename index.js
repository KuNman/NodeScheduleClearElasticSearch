//Load express module with `require` directive
var express = require('express')
var app = express()
var api = require('./routes/api/api');
var auth = require('http-auth');
var basic = auth.basic({
    realm: "NodeJS Microservice."
}, (username, password, callback) => {
    callback(username === process.env.USER && password === process.env.PASSWORD);
});
require('dotenv').config()

app.use(auth.connect(basic));

app.get('/', function (req, res) {
    res.send(`Hello World!`);
})

app.use('/api', auth.connect(basic), api);

app.listen(9080, function () {
    console.log('app listening !')
})

