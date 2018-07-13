var express = require('express');
var router = express.Router();
var helpers = require('../../helpers/rentalOffer.js')

router.route('/')
    .get(helpers.log)
    .post(helpers.clear)

module.exports = router;