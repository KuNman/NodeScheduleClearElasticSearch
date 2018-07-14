var format = require('date-format');
var client = require('../helpers/esClient');

const service =
    class DeleteExpiredRentalOffers {

    constructor()
    {
        this.index = 'search_rental_offer_index';
        this.body = {
            query: {
                range: {
                    date_end: {
                        gt: format.asString('yyyy-mm-dd', new Date()),
                        format: "yyyy-mm-dd"
                    }
                },
            },
            _source: "_id"
        };
    }

    collectIds() {
        return client.search({index: this.index, body: this.body})
            .then(results => {
                results.hits.hits.forEach(function (value) {
                    let idsArray = [];
                    return idsArray.push(value._id);
                })
            })
            .catch(console.error);
    }

}

module.exports = service;