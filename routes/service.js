
module.exports = function(app){
    var ctrl = app.controller.RequestCtrl;
    app.post('/service',ctrl.getPostRequest);
}