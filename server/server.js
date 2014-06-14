
Meteor.methods({
	addMeal: function (meals) {
		var id = Meals.insert(meals);

		return id;
	},
	addCategory: function (category) {
		var id = Categories.insert(category);

		return id;
	}
});

Meteor.publish("meals", function () {
	return Meals.find();
});
Meteor.publish("categories", function () {
	return Categories.find();
});

