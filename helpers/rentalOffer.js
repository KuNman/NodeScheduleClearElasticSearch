var client = require('./esClient');
var bodybuilder = require('./esBodyBuilder');

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

exports.test = function(req, res) {
    const search = function search(index, body) {
        return client.search({index: index, body: body});
    };

    search('search_rental_offer_index', bodybuilder().query('match', 'city', 'Warszawa').build())
        .then(results => {
            return res.json(results)
        })
        .catch(console.error);
    }


module.exports = exports;