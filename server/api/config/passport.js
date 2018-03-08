var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var config = require('./keys');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    MongoClient.connect(url, (err, db) => {
        if(err) {
            return done(err, false);        
        } 
        db.collection('Users').find({id: jwt_payload.id}).toArray().then((user) => {
            if(user.length > 0) {
                done(null, user);
            } else {
              done(null, false);
              res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
            }
        }, (err) => {
            throw err;
        });
        db.close();
    });    

  }));
};
