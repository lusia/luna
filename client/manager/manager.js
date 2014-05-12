$("#warningLabel").hide();
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
Template.addMealForm.events({
	'click #submitNewMeal': function (ev) {
		ev.preventDefault();

		var query = {
			name: $("#name").val(),
			price: $("#price").val(),
			calories: $("#calories").val(),
			category: $("#category").val()
		};

		isInputsEmpty(query);
	}
});

/**
 * Validate inputs from add new meal form
 * @param query - object with values from inputs
 */
var isInputsEmpty = function (query) {

	if ((query.name === "")|| (query.price === "") || (query.calories === "")) {
		$("#warningLabel").addClass("di")
		$(".warningLabel").text("All fields are required");

	}
	if ((isNaN(query.price) === true) || (isNaN(query.calories) === true)) {
		$("#warningLabel").addClass("di")
		$(".warningLabel").text("To Price and Calories fields please enter a number");

	}

};
