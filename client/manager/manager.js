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


Template.managerMealAdd.events({
	'click #submitNewMeal': function () {

		var meals_data = {
			name: $(".name").val().trim(),
			price: $(".price").val(),
			calories: $(".calories").val(),
			category: [$(".category").val()]
		};

		Meteor.call("managerMealLayout", meals_data, function (error, id) {

		});

	},
	'click #addCategory': function () {

		Session.set("name", $(".name").val().trim());
		Session.set("price", $(".price").val());
		Session.set("calories", $(".category").val());
	}

});

Template.managerCategoryAdd.events({
	'click #submitNewCategory': function () {

		var category_data = {
			name: $(".name_category").val().trim().toLowerCase()
		};
		Meteor.call("addCategory", category_data, function (error, id) {

		});


	}
});

AutoForm.hooks({
	insertCategoryForm: {
		onSuccess: function (insert, result, managerCategoryAdd) {

			Router.go('managerMealUpdateLayout');
		}
	}
});
