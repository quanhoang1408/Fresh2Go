const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Store', storeSchema);