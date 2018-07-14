var express = require('express');
var router = express.Router();
var rentalOffer = require('../../helpers/rentalOffer.js')
var ping = require('../../helpers/ping.js')

router.route('/')
    .get(ping.ping)

router.route('/rentalOffer/deleteExpired')
    .get(rentalOffer.delete)

module.exports = router;