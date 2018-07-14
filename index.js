//Load express module with `require` directive
var express = require('express')
var app = express()

var routesRentalOffer = require('./routes/api/rentalOffer');

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use('/api/rentalOffer', routesRentalOffer);

app.listen(9080, function () {
    console.log('app listening !')
})

