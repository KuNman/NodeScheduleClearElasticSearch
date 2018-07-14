var express = require('express');
var router = express.Router();
var helpers = require('../../helpers/rentalOffer.js')

router.route('/')
    .get(helpers.ping)

router.route('/test')
    .get(helpers.test)

module.exports = router;