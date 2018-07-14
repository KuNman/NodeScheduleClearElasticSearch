var bodybuilder = require('./esBodyBuilder');
var schedule = require('node-schedule');
const { DeleteExpiredRentalOffers } = require("../services/rentalOffer");


schedule.scheduleJob('* * * * *', function(){
    exports.delete();
});


exports.delete = async function(req, res) {
    const object = new DeleteExpiredRentalOffers();
    await object.find()
    object.remove();
    // res.status(200).json(1);
}


module.exports = exports;