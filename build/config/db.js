"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const url = "mongodb+srv://kest:9PtM95azSnQ0XgZf@cluster0.nfqpu.mongodb.net/test";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
//module.exports = connectDB;
exports.default = connectDB;
