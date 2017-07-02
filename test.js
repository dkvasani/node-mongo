var mongoDb = require('./index');

var options = {}
mongoDb.connectMongoDb(options);
mongoDb.createCollection(options, 'customer');

var data = { name: 'Company Inc', address: 'Highway 37' };
mongoDb.createCollection(options, 'customer', data)
var multipleData =  [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
mongoDb.insertMultipleDatatTCollection(options, 'customer', multipleData)
mongoDb.fetchMultipleDatatFromCollection(options, 'customer')