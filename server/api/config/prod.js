// production enviournment

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: 'mongodb://shailesh:12345@ds227168.mlab.com:27168/shopping',
    cookieKey: process.env.COOKIE_KEY
};
  