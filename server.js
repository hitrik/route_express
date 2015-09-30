var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

app.use(bodyParser({extended: "true"}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");
require("./route")(router);
var port = process.env.port || 8686;

app.use("/", router);
app.listen(port);