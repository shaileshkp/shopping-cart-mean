const express = require('express');
const router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');

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

passport.use(new LocalStrategy(
    function(username, password, done) {
        MongoClient.connect(url, (err, db) => {
            if(err) {
                throw err
            } 
            db.collection('Users').find({ email: username}).toArray().then((user) => {
                if(user.length > 0) {
                    bcrypt.compare(password, user[0].password).then(function(res) {
                        if(res){
                            return done(null, user[0]);
                        } else {
                            return done(null, false, {message: 'Invalid password'});
                        }
                    });
                } else {
                    return done(null, false, {message: 'Unknown User'});
                }
            }, (err) => {
                throw err;
            });
            db.close();
        });
    })
);

passport.serializeUser(function(user, done) {
    console.log('Serialize user:'+JSON.stringify(user));
    
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    console.log("Deserialize called....",user);
    done(null, user);
});

router.post('/login',
    passport.authenticate('local', 
    {
        successRedirect:'/api/users/success', 
        failureRedirect:'/api/users/failure',
        failureFlash: true,
        session: true
    }),
    function(req, res) {
        res.redirect('/api/users/success');
    }
);

router.get('/success', function(req, res) {
    res.status(200).send('Successfull login');
});

router.get('/failure', function(req, res) {
    res.send(401);
});

module.exports = router;
