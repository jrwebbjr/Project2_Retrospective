const mongoose = require("mongoose");

const photographSchema = new mongoose.Schema({
    photograph: String,
    title: String,
    photographer: String,
});

const Photograph = mongoose.model("photograph", photographSchema);

module.exports = Photograph;