//---* Import Dependencies *---//

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override")
const photographController = require("./controllers/photograph");
const videoController = require("./controllers/video");
const path = require("path")


//---* Create Express App *---//
const app = express();
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//---* Middleware *---//

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));


//---* Routes *---//
app.use("/", photographController);
app.use("/video", videoController);


//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Listening on port ${PORT} ***`))