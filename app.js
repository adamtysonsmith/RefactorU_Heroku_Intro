var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// Heroku will assign a port that we need to pass in using process.env
// process.env.PORT
// If the process.env.PORT is undefined, then we use the localhost:6634
var port = process.env.PORT || 6634;
console.log(process.env);

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});