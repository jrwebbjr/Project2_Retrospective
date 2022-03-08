const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const photographSchema = new Schema({
    photograph: String,
    title: String,
    photographer: String,
    camera: String,
    isImageForSale: Boolean,
});

const Photograph = model("Photograph", photographSchema);

module.exports = Photograph;