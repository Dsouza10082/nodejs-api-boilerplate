const constants            = require('../util/Constants');
var uuid                   = require('uuid');
var mime                   = require('mime');
var Result                 = require('../model/Result');

module.exports = function (app) {
    var requestCtrl = {
        getPostRequest: function (req, res) {
            
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, Accept, Origin, Referer, User-Agent, Content-Type, Authorizati' + 'on');
            
            let json = req.body;
            let service = json.service;

            let cases = {};

            //TODO add validation for service

            cases[constants.services.CALL_REQUEST] = function() {
            let func1 = require('../service/functions/callRequest');
                func1.callRequest(json, res, constants.services.CALL_REQUEST);
            };

            if(typeof cases[service] == 'function') {
                cases[service]();
            } else {
                let result = new Result();
                result.message = 'Command not found';
                res.send(result);
            }           
        }
    };
    
    return requestCtrl;
};
