$(".warningLabel").hide();
var sub = Meteor.subscribe("meals");

var getMeals = function () {
	return Meals.find().fetch();
};


/**
 * Group meals collection by category and  push result to the array for better iteration it in templates
 * @param fn - documents from meals collection (object with category property)
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

		var meals_data = {
			name: $("#name").val().trim(),
			price: $("#price").val(),
			calories: $("#calories").val(),
			category: $("#category").val()
		};

		areInputsValid(meals_data);

	}

});
Template.addNewCategory.events({
	'click #submitNewCategory': function (ev) {
		ev.preventDefault();
		var category_data = {
			name: $("#name_category").val().trim().toLowerCase()
		};

		isNameValid(category_data);
		isDataExist(category_data.name);
	}
});

/**
 * Validate values from the inputs from add new meal form
 * @param obj - object with values from inputs
 */
var areInputsValid = function (obj) {

	if ((obj.name.length === 0) || (obj.price.length === 0) || (obj.calories.length === 0)) {

		var info = "All fields are required";
		displayInfo(info);
	}

	else if ((isNaN(obj.price) === true) || (isNaN(obj.calories) === true)) {
		var info = "To Price and Calories fields please enter a number";
		displayInfo(info);

	}
	else {
		$('.dn').hide();
	}
};

var isNameValid = function (obj) {
	if (obj.name.length === 0) {
		var info = "Field is required";
		displayInfo(info);
	}
	else {
		$('.dn').hide();
	}
};


var isDataExist = function (data) {
	var meals = getMeals();

	for (var i = 0; i < meals.length; i++) {
		if (data === meals[0].category) {
			var info = "This category name is already exist";
			displayInfo(info);
		}
	}

};

var displayInfo = function (info) {

	$('.dn').show();
	$(".warningLabel label").text(info);
};