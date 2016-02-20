var express = require('express'),
    getConfigurationValue = require('./config').getValueForEnvironment,
    bodyParser = require('body-parser');

var app = require('express')(),
    env = app.get('env');
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Setup express application
app.set('port', getConfigurationValue('/app/port', env))

// View engine
app.set('view engine', 'jade');
app.set('views', getConfigurationValue('/rootPath', env) + '/public/app');

app.use(bodyParser.json())

// STATIC FILES
// Script src and style link attributes are
// relative to ./public with "assets/" prepended
app.use('/assets', express.static('./public'))

// VIEWS
app.get('/:view', function(req, res, next) {
    res.render(req.params.view)
})
app.get('/', function(req, res, next) {
    // Render app index jade view
    res.render('index')
})


// SOCKET.IO COMMUNICATION
io.on('connection', require('./controllers').Socket(io))

function start() {
    server.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
}

module.exports = {
    start: start,
    app: app
}
