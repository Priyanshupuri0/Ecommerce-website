const mongoose = require('mongoose');
const connectDB = mongoose.connect("mongodb+srv://first-user:p0o9i8u7@cluster0.lxcccv9.mongodb.net/Infographics?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));

module.exports = connectDB;