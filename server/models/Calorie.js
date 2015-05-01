var mongoose = require('mongoose');

var calorieSchema = mongoose.Schema({
  userId: {type:String, required:'{PATH} is required!'},
  type: {type:String, required:'{PATH} is required!'},
  number: {type:Number, required:'{PATH} is required!'},
});

var Calorie = mongoose.model('Calorie', calorieSchema);

function createDefaultCalories() {
  Calorie.find({}).exec(function(err,collection){
    if(collection.length === 0) {
      Calorie.create({userId : 1, type: 'bad', number: 500});
    }
  });
}

exports.createDefaultCalories = createDefaultCalories;