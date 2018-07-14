var client = require('./esClient');


exports.ping = function(req, res) {
    client.ping({
        requestTimeout: 30000,
    }, function(error) {
        if (error) {
            return res.json('ES cluster is down!');
        } else {
            return res.json('Everything is ok');
        }
    });
}

module.exports = exports;