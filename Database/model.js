const mongoose = require('mongoose');
const checkingSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: Number, required: true }
})

const check = new mongoose.model("check", checkingSchema);

module.exports = check;