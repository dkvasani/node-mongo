module.exports = {
    connectMongoDb: function (options) {
        var mongo = require('mongodb');
        var MongoClient = require('mongodb').MongoClient;
        var dbName = options.db_name ? options.db_name : 'mySampleDb'
        var port = options.port ? options.port : 27017
        var url = options.url ? options.url : 'mongodb://localhost:' + port + '/' + dbName;
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
        });
    },
    createCollection: function (options, collectionName) {
        var mongo = require('mongodb');
        var MongoClient = require('mongodb').MongoClient;
        var dbName = options.db_name ? options.db_name : 'mySampleDb'
        var port = options.port ? options.port : 27017
        var url = options.url ? options.url : 'mongodb://localhost:' + port + '/' + dbName;
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.createCollection(collectionName, function (err, res) {
                if (err) throw err;
                console.log("Table created!");
                db.close();
            });
        });
    },
    insertDatatTCollection: function (options, collectionName, data) {
        var mongo = require('mongodb');
        var MongoClient = require('mongodb').MongoClient;
        var dbName = options.db_name ? options.db_name : 'mySampleDb'
        var port = options.port ? options.port : 27017
        var url = options.url ? options.url : 'mongodb://localhost:' + port + '/' + dbName;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;

            db.collection(collectionName).insertOne(data, function (err, res) {
                if (err) throw err;
                console.log("1 record inserted");
                db.close();
            });
        });
    },
    insertMultipleDatatTCollection: function (options, collectionName, data) {
        var mongo = require('mongodb');
        var MongoClient = require('mongodb').MongoClient;
        var dbName = options.db_name ? options.db_name : 'mySampleDb'
        var port = options.port ? options.port : 27017
        var url = options.url ? options.url : 'mongodb://localhost:' + port + '/' + dbName;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;

            db.collection(collectionName).insertMany(data, function (err, res) {
                if (err) throw err;
                console.log("1 record inserted");
                db.close();
            });
        });
    },
    fetchMultipleDatatFromCollection: function (options, collectionName) {
        var mongo = require('mongodb');
        var MongoClient = require('mongodb').MongoClient;
        var dbName = options.db_name ? options.db_name : 'mySampleDb'
        var port = options.port ? options.port : 27017
        var url = options.url ? options.url : 'mongodb://localhost:' + port + '/' + dbName;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;

            db.collection(collectionName).find({}).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
            });
        });
    },
}
