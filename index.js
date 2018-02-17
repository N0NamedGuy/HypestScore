var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./api/routes/scoreboardRoutes');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

routes(app);

app.listen(port);