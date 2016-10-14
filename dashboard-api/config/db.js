var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
}

exports.connect = function (url, done) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            return done(err);
        }

        console.log('Connected successfully to database');
        state.db = db;
    });
}

exports.get = function () {
    return state.db;
}

exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null;
            done(err);
        });
    }
}