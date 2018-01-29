var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true, minlength: 8 },
    _location: { type: Schema.Types.ObjectId, ref: 'Location' },
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Conversation' }],
    offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
    asks: [{ type: Schema.Types.ObjectId, ref: 'Ask' }],
}, { timestamps: true });

mongoose.model('User', UserSchema);