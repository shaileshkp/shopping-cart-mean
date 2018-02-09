const express = require('express');
const router = express.Router();

const { MongoClient, ObjectID } = require('mongodb');

const keys = require('./../config/keys');
const url = keys.mongoURI;

router.get('/', (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return console.log('Unable to connect to database');
        } 
        db.collection('Products').find().toArray().then((products) => {
            res.send(products);
        }, (err) => {
            res.send('Unable to fetch products',err);
        });
        db.close();
    });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(400).send('ID is invalid');
    }
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return console.log('Unable to connect to database');
        } 
        db.collection('Products').find({
            _id: new ObjectID(id)
        }).toArray().then((docs) => {
            if(docs.length > 0) {
                res.send(docs);
            } else {
                res.status(404).send('Not Found');
            }
        }, (err) => {
            res.status(400).send('Unable to fetch Product', err);
        });
        db.close();
    });
});



module.exports = router;