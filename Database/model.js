const mongoose = require('mongoose');
const checkingSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const check = mongoose.model.check || new mongoose.model("check", checkingSchema);

module.exports = check;