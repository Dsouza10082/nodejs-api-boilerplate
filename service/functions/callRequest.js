var Result                 = require('../../model/Result');
var requestService         = require('../../service/CoreRequestService');
var uuid                   = require('uuid');

exports.callRequest = function(json, res, service){
    
    let result = new Result();
    result.id = uuid.v1();
    json.id = result.id;
    result.service = service;

    requestService
        .executeLoop(json.data)
        .then(loopResult=>{
            result.success = true;
            result.message = "Loop finish for";
            result.data = loopResult;
            res.send(result);       
    });
}