const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    video: String,
    title: String,
    director: String,
});

const Video = mongoose.model("video", videoSchema);

module.exports = Video;