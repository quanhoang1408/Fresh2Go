const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        // console.log('Mongoose connection established');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;