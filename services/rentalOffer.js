var format = require('date-format');
var client = require('../helpers/esClient');

class DeleteExpiredRentalOffers {

    constructor()
    {
        this.index = 'search_rental_offer_index';
        this.array = [];
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

    find() {
        return client.search({index: this.index, body: this.body})
            .then(response => {
                var that = this;
                return response.hits.hits.map(value => that.array.push(value._id))
            })
            .catch(error =>
                console.log(error.message)
            )

    }

    remove() {
        // this.array = [];
    }

}

module.exports = {
    DeleteExpiredRentalOffers,
};