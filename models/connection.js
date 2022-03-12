require("dotenv").config();
const mongoose = require("mongoose");

//---* Database Connection *---//

//Inputs for connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

//opens/disconnect/errors
mongoose.connection
    .on("open", () => console.log("*** Mongo in the House ***"))
    .on("close", () => console.log("* Mongo has left the Building *"))
    .on("error", (error) => console.log(error))

    module.exports = mongoose;