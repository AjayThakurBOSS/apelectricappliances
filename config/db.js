const mongoose = require('mongoose');
const colors = require('colors');
// require('dotenv').config(); // Ensure .env is loaded

const uri = "mongodb+srv://ajaykrthakur02:0XpuNXMbLR3xkego@cluster0.hxen6zc.mongodb.net/apelectric"

const connectDB = async () => {
    try {
        if (!uri) {
            throw new Error('MONGO_URL is not defined in environment variables');
        }
        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`MongoDB connection issue: ${error.message}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB; 
