const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash=require("connect-flash");
const session = require('express-session');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const keys = require('./api/config/keys');
const productRoutes = require('./api/routes/products');
const notificationRoutes = require('./api/routes/notification');
const userRoutes = require('./api/routes/users');
const authRoutes = require('./api/routes/auth');

const app = express();

// BodyParser Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));
app.use(cookieParser());
app.use(flash());

//CORSE
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,X-Request-With, Authorization");
    req.header('Access-Control-Allow-Methods',"GET, POST, PUT, DELETE");
    next();
});

// // Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

//cookie-session
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notification', notificationRoutes);
app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;