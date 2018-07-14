var format = require('date-format');
var client = require('../helpers/esClient');
const log = require('simple-node-logger').createSimpleLogger('project.log');

class DeleteExpiredRentalOffers {

    constructor()
    {
        this.index = 'search_rental_offer_index';
        this.array = [];
        this.findBody = {
            query: {
                range: {
                    date_end: {
                        lt: format.asString('yyyy-MM-dd', new Date()),
                        format: "yyyy-MM-dd"
                    }
                },
            },
            _source: "_id"
        };
    }

    find() {
        return client.search({index: this.index, body: this.findBody})
            .then(response => {
                var that = this;
                return response.hits.hits.map(value => that.array.push(value._id))
            })
            .catch(error =>
                console.log(error.message)
            )

    }

    remove() {
        if(this.array.length > 0) {
            var index = this.index;
            this.array.forEach(function (value) {
                let deleteBody = {
                    query: {
                        match: {
                            _id: value
                        }
                    }
                }
                return client.deleteByQuery({index: index, body: deleteBody})
                    .then(response => {
                        log.info('Usunięto oferty nieruchomości. ' + new Date().toJSON() + response);
                    })
                    .catch(error =>
                        log.info('Błąd przy usuwaniu ofert nieruchomości. ' + new Date().toJSON() + error)
                    )
            })
        } else {
            log.info('Nie było ofert nieruchomości do usunięcia. '+ new Date().toJSON());
        }

    }

}

module.exports = {
    DeleteExpiredRentalOffers,
};