const express = require('express');
const router = express.Router();
const webpush = require('web-push');

const { MongoClient, ObjectID } = require('mongodb');

const keys = require('./../config/keys');
const url = keys.mongoURI;

router.post('/nwsub', (req, res) => {
    var _id = new ObjectID();
    var endpoint = req.body.endpoint;
    var keys = req.body.keys;
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return console.log('Unable to connect to database');
        } 
        db.collection('Subscription').insertOne({
            _id, endpoint, keys
            },(err, result) => {
            if(err) {
                return res.status(400).send('Error');
            }
            res.send(result.ops[0]);
        });
        db.close();
    });
});

router.post('/nwnf', (req, res) => {
    var text = req.body.text;
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return console.log('Unable to connect to database');
        } 
        db.collection('Subscription').find().toArray().then((subscribers) => {
            webpush.setGCMAPIKey('AIzaSyCtAi3mF_FC8Opr8jUS54NpsC12e24B6Pk');
            webpush.setVapidDetails('mailto:shaileshkp001@gmail.com',
                            'BAeEP0Pi0FDXYrUHA8ipXPWS0di1ZyAORScTdPNandRanbRkUm6mY3q6481wQ9q89CnDsttVRTiFzFH6Zfr0oPE',
                            'WfYrSDxm2R_4yq2FKlq386FmwDbPHH32wKau1aogjdk');
            subscribers.forEach(subscriber => {
                var pushConfig = {
                    endpoint: subscriber.endpoint,
                    keys: {
                        auth: subscriber.keys.auth,
                        p256dh: subscriber.keys.p256dh
                    }
                }
                webpush.sendNotification(pushConfig, JSON.stringify(
                    {
                        title: "Shopping Cart", 
                        content:req.body.text,
                        openUrl: req.body.openUrl
                    }))
                    .catch(function(err) {
                        console.log(err);
                });
            });
            res.send(subscribers);
        }, (err) => {
            res.send('Unable to fetch products',err);
        });
        db.close();
    });
});

module.exports = router;