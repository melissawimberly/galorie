var Meal = Backbone.Model.extend({
  defaults: {
              name    : '',
              goodCal : 0,
              badCal  : 0
    }
});

var Meals = Backbone.Collection.extend({

});

var breakfast = new Meal ({
  name    : 'waffles',
  goodCal : 0,
  badCal  : 250
})


var MealsView = Backbone.View.extend({
  model: new Meal(),
  tagName: "tr",

  className: "form-control",


  initialize: function() {
    this.template = _.template($('.meals-list-template').html())
    // this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON))
  }

});

console.log(breakfast);