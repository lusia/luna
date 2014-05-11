Router.map(function () {
	this.route("firstView", {
		path: "/",
		template: 'firstView',
		layoutTemplate: "mainManagerTempl"
	});
	this.route("mealsListView", {
		path: "/meals-list",
		template: 'mealsListView',
		layoutTemplate: "mainManagerTempl"
	});
	this.route("addMealForm", {
		path: "/add-meal",
		template: 'addMealForm',
		layoutTemplate: "mainManagerTempl"
	});
});

Meteor.subscribe("meals");
var meals = Meals.find().fetch();

/**
 * Group meals collection by category and  push result to the array for better iteration it in templates
 * @param meals - documents from meals collection (object with category property)
 * @returns {Array} example: [{category: string, meals: array of objects}]
 */
var groupMeals = function (meals) {
	var mgbc = _.groupBy(meals, 'category'), //mealsGroupedByCategories
		mealsList=[];

	for (var category in mgbc) {
		mealsList.push({'category': category, 'meals': mgbc[category]});
	}

	return mealsList;
};

Template.mealsListView.doc = function () {
	var mealsList = groupMeals(meals);

	return mealsList;
};
Template.addMealForm.categories = function () {
	var mealsList = groupMeals(meals);

	return mealsList;
};

