var sub = Meteor.subscribe("meals");

var getMeals = function () {

	return Meals.find().fetch();
};


/**
 * Group meals collection by category and  push result to the array for better iteration it in templates
 * @param meals - documents from meals collection (object with category property)
 * @returns {Array} example: [{category: string, meals: array of objects}]
 */
var groupMeals = function (fn) {
	var meals = fn(),
		mgbc = _.groupBy(meals, 'category'), //mealsGroupedByCategories
		mealsList = [];

	for (var category in mgbc) {
		mealsList.push({'category': category, 'meals': mgbc[category]});
	}

	return mealsList;
};

Template.mealsListView.doc = function () {
	var mealsList = groupMeals(getMeals);

	return mealsList;
};
Template.addMealForm.categories = function () {
	var mealsList = groupMeals(getMeals);

	return mealsList;
};

