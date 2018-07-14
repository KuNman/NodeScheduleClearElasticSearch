var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: [ 'http://elastic:changeme@172.17.0.1:9200']
});

module.exports = client;