var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, minlength: 10 },
    value: { type: Number, required: true, min: 1 },
    type: { type: String, required: true },
    // type is either good or service
    _poster: { type: Schema.Types.ObjectId, ref: 'User'},
    _location: { type: Schema.Types.ObjectId, ref: 'Location'},
    status: { type: String },
    // status is either accepted or available 
    acceptedUser: { type: Schema.Types.ObjectId },
    matchAccept: { type: Schema.Types.ObjectId }
}, { timestamps: true }); 

mongoose.model('Offer', OfferSchema);