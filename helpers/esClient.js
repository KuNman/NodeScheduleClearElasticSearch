const elasticsearch = require('elasticsearch');
require('dotenv').config()

const client = new elasticsearch.Client({
    hosts: [ 'http://'+process.env.ES_USER+':'+process.env.ES_PASS+'@'+process.env.ES_HOST+':'+process.env.ES_PORT],
});

module.exports = client;