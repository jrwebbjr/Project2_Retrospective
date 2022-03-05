//---* Import Dependencies *---//

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const path = require("path")



//---* Create Express App *---//

const app = express();
app.engine("jsx", require("express-react-views").createEngine())
app.set("view engine", "jsx")



//---* Middleware *---//

app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));



//---* Routes *---//
app.get("/", (req, res) => {
    res.send("Your Server Is Running")
})
//Index

//New
app.get("/new", (req, res) => {
    res.render("photograph/New")
})

//Delete

//Update

//Create

//Edit

//Show



//---* Server Listener *---//

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`*** Listening on port ${PORT} ***`))