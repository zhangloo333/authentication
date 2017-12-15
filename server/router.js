module.exports = function(app){
  app.get('/',function(req, res, next){
    /**
     * @params get from http request;
     * @params req: request
     * @params res: response
     * @params next: for error handling
     */
     res.send(['data1','data2','data3']);

  });
}
