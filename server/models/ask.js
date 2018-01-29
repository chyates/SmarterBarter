var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: 10 },
    value: { type: Number, required: true, min: 1 },
    type: { type: String, required: true },
    // type is either good or service
    _asker: { type: Schema.Types.ObjectId, ref: 'User'},
    _location: { type: Schema.Types.ObjectId, ref: 'Location'},
    status: { type: String },
    // status is either filled or unfulfilled
    acceptedUser: { type: Schema.Types.ObjectId },
    matchOffer: { type: Schema.Types.ObjectId }
}, { timestamps: true });

mongoose.model('Ask', AskSchema);