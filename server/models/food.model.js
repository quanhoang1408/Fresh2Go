const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }
});