var express = require('express')
    , http = require('http')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    ,config = require('./config/config')
    ,ErrorHandler = require('./error/errorHandler');

var app = express();
app.set('port', process.env.PORT || config.APP_PORT);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

require('./routes/airport.js')(app);

app.use(function(req, res, next) {
    next(new ErrorHandler.PathNotFoundError());
});

app.use(ErrorHandler.handleError);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});