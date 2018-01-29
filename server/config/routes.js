// Require mongoose
var mongoose = require('mongoose');

// Require models
var User = mongoose.model("User");
var Ask = mongoose.model("Ask");
var Offer = mongoose.model("Offer");
var Location = mongoose.model("Location");

// Require controllers
var users = require('../controllers/users.js');
var asks = require('../controllers/asks.js');
var offers = require('../controllers/offers.js');
var locations = require('../controllers/locations.js');

module.exports = function(app) {

};