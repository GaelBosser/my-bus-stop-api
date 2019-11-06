const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    idArret: { type: String, required: true },
    idUser: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Favori', schema);
