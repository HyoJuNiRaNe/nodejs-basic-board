
/**
 * Module dependencies.
 */

var express = require('express')
//  , routes = require('./routes')
  , controllers = require('./controllers')
//  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}

app.configure("development", function () {
	app.use(express.errorHandler());
});

//app.get('/', controllers.index);
//app.get('/users', user.list);

require("./router.js").route(app);

require("./db.js").connect();

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
