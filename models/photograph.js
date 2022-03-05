const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const photographSchema = new Schema({
    title: String,
    photographer: String,
    isImageForSale: Boolean,
});

const Photograph = model("Photograph", photographSchema);

module.exports = Photograph;