var Calorie = require('mongoose').model('Calorie');


module.exports = function(router){

  router.route('/calories')
  .post(function(req, res){
    var calorie = new Calorie();
    calorie.name = req.body.name;
    calorie.save(function(err){
      if (err) res.send(err);
      res.json({message: 'calorie posted'})
    })
  })

  .get(function(req, res){
    Calorie.find(function(err, calories){
      if (err) res.send(err);
      res.json(calories);
    });
  });


router.route('/calories/:calorie_id')

  .get(function(req, res) {
      Calorie.findById(req.params.calorie_id, function(err, calorie){
        if (err) res.send(err);
        res.json(calorie);
      })
  
  })
};