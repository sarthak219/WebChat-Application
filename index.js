const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});