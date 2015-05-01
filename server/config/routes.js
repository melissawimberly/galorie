module.exports = function(app, express){

  var router        =   express.Router(),
      userRoutes    =   require('../routes/users')(router),
      calorieRoutes =   require('../routes/calories')(router);

  router.use(function(req, res, next) {
    next();
  });
  
  app.use('/api', router);

};