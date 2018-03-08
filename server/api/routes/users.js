const express = require('express');
const router = express.Router();
var passport = require('passport');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('../config/passport')(passport);

const { MongoClient, ObjectID } = require('mongodb');
const keys = require('./../config/keys');
const url = keys.mongoURI;

router.post('/register', (req, res) => {
    console.log('Request body : '+JSON.stringify(req.body));
    var _id = new ObjectID();
    var fullName = req.body.fullName;
    var email = req.body.email;
    var password = req.body.password;
    var phno = req.body.phno;
    
    MongoClient.connect(url, (err, db) => {
        if (err) {
            return res.status(400).send('Unable to connect to database');
        }
        db.collection('Users').find({ email }).toArray().then((docs) => {
            if(docs.length > 0) {
                res.status(400).send('User already exist');
            } else {
                bcrypt.hash(password, 10).then(function(hash) {
                    password = hash;
                    MongoClient.connect(url, (err, db) => {
                        db.collection('Users').insertOne({
                            _id, fullName, email, password, phno
                        },(err, result) => {
                            if(err) {
                                return res.status(400).send('Error');            
                            }
                            res.send(result.ops[0]);
                        });
                        db.close();
                    }); 
                });
            }
        }, (err) => {
            return res.status(400).send('Error'+err); 
        });
        db.close();
    });
});

router.post('/login', function(req, res) {
    var username = req.body.username
    var password = req.body.password

    MongoClient.connect(url, (err, db) => {
        if(err) {
            throw err
        } 
        db.collection('Users').find({ email: username}).toArray().then((user) => {
            if(user.length > 0) {
                bcrypt.compare(password, user[0].password).then(function(result) {
                    if(result){
                        // if user is found and password is right create a token
                        var token = jwt.sign(user[0], keys.secret);
                        // return the information including token as JSON
                        res.json({success: true, token: 'JWT ' + token});
                    } else {
                    res.status(400).send({success: false, msg: 'Authentication failed. Password not matched.'});
                    }
                });
            } else {
                res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
            }
        }, (err) => {
            throw err;
        });
        db.close();
    });
});

module.exports = router;
