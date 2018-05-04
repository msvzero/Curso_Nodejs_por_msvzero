const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds115340.mlab.com:15340/hero');
module.exports = { mongoose }