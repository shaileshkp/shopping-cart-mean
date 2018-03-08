const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash=require("connect-flash");
const session = require('express-session');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var cors = require('cors')

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
app.use(flash());

//CORSE

app.use(cors())

// app.use((req,res,next) => {
//     res.header("Access-Control-Allow-Origin",'*');
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept,X-Request-With, Authorization");
//     req.header('Access-Control-Allow-Methods',"GET, POST, PUT, DELETE");
//     next();
// });

// // Express Session
// app.use(session({
//     secret: 'secret',
//     saveUninitialized: true,
//     resave: true
// }));

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