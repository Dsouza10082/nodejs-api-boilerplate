
var express = require('express'),
  config = require('./config/config');

var app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port,function(){
    console.log("Api iniciada com sucesso na porta " + config.port);
});

