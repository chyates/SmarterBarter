var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
    city: { type: String },
    state: { type: String },
    region: { type: String },
    offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }],
    asks: [{ type: Schema.Types.ObjectId, ref: 'Ask' }]
}, { timestamps: true });

mongoose.model('Location', LocationSchema);