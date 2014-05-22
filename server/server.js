Meteor.startup(function () {

	// code to run on server at startup
	if (Meals.find().count() == 0) {
		var meals = [
			{
				"name": "meal 1",
				"price": 30,
				"category": "a",
				"calories": 150
			},
			{
				"name": "meal 3",
				"price": 30,
				"category": "b",
				"calories": 150
			},
			{
				"name": "meal 4",
				"price": 30,
				"category": "b",
				"calories": 150
			}
		];

		_.each(meals, function (doc) {
			Meals.insert(doc);
		});
	}
	if (Categories.find().count() == 0) {
		var categories = [
			{"category_name": "a"},
			{"category_name": "b"}
		];
		_.each(categories, function (doc) {
			Categories.insert(doc);
		});
	}

});

Meteor.publish("meals", function () {

	return Meals.find();
});
Meteor.publish("categories", function () {

	return Categories.find();
});