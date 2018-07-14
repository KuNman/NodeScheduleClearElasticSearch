var bodybuilder = require('./esBodyBuilder');
var schedule = require('node-schedule');
const { DeleteExpiredRentalOffers } = require("../services/rentalOffer");


// schedule.scheduleJob('* * * * *', function(){
//     exports.test();
// });


exports.delete = async function(req, res) {
    const object = new DeleteExpiredRentalOffers();
    await object.find()
    await object.remove();
    res.status(200).json(1);
}


module.exports = exports;