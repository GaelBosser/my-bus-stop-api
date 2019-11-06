const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    adress: { type: String, required: true },
    latitude: { type: String },
    longitude: { type: String },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    type: { type: String, required: true },
    state: { type: String, required: true },
    ticketDispenser: { type: Boolean },
    numberCars: { type: Number },
    averageWait: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Arret', schema);
