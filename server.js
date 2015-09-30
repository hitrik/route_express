var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
require("./route")(router);
var app = express();

app.use(bodyParser({extended: "true"}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var port = process.env.port || 8686;



app.use("/", router);
app.listen(port);