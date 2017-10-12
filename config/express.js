var express        = require("express");
var bodyParser     = require("body-parser");
var load           = require('express-load');
var constants      = require('../util/Constants');
var engine         = require('ejs-mate');
var session        = require('express-session');
var compression    = require('compression');
var cors           = require('cors');

module.exports = function(app, config) {
    app.engine("ejs",engine);

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.set('port', config.port);
    app.set('title', constants.app.name);
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname+'/public'));
    app.use(session({secret:constants.session.secret}));
    app.use(compression());

    load('controller').then('service').then('routes').into(app);

    return app;
};

