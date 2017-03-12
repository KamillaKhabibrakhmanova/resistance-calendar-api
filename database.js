var mongoose = require('mongoose'),
    config = require('./config');
var promise_options = { 
	promiseLibrary: require('bluebird') 
};

var db = mongoose.createConnection(config.mongoUri, promise_options);

mongoose.connect(config.mongoUri);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

module.exports = db;