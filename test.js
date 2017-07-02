var mongoDb = require('./index');

var options = {}
mongoDb.connectMongoDb(options);
//mongoDb.createCollection(options, 'customer');

var data = { name: 'Company Inc', address: 'Highway 37' };
mongoDb.createCollection(options, 'customer', data)