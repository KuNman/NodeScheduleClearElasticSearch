exports.log = function(req, res) {
    res.json('log');
}

exports.clear = function(req, res) {
    res.json('clear');
}

module.exports = exports;