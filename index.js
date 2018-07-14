//Load express module with `require` directive
var express = require('express')
var app = express()

var api = require('./routes/api/api');

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use('/api', api);

app.listen(9080, function () {
    console.log('app listening !')
})

