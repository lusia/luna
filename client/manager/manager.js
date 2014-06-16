$(".warningLabel").hide();

Meteor.subscribe("meals");
Meteor.subscribe("categories");

var getMeals = function () {
	return Meals.find().fetch();
};
var getCategories = function () {
	return Categories.find().fetch();
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

Template.managerMealList.doc = function () {
	var mealsList = groupMeals(getMeals);

	return mealsList;
};
Template.managerCategoryList.categories = function () {
	var categoryList = getCategories();

	return categoryList;
};

AutoForm.hooks({
	insertCategoryForm: {
		onError: function (insert, error, template) {
			console.log('error', error);
			console.log('err templ', template);
		},
		onSuccess: function (operation, result, template) {

			Router.go('managerMealUpdateLayout');
		}
	}
});

AutoForm.hooks({
	insertMealForm: {
		onError: function (insert, error, template) {
			console.log('error', error);
		},
		onSuccess: function (operation, result, template) {
			console.log('Success');
		}
	}
});