var bodybuilder = require('./esBodyBuilder');
var schedule = require('node-schedule');
var service = require('../services/rentalOffer');

// schedule.scheduleJob('* * * * *', function(){
//     exports.test();
// });


exports.delete = function(req, res) {
    const object = new service();
    res.json(object.collectIds())
}


module.exports = exports;