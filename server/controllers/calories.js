var Calorie = require('mongoose').model('Calorie');

exports.getCalories = function(req,res) {
  Calorie.find({}).exec(function(err,collection){
    res.send(collection);
  });
};

exports.getCaloriesById = function(req, res){
  Calorie.findOne({_id:req.params.id}).exec(function(err,calorie){
    res.send(calorie);
  });;