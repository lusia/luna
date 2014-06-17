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
		mgbc = _.groupBy(meals, 'category_id'), //mealsGroupedByCategories
		mealsList = [],
		categoryName;

	for (var category_id in mgbc) {
		categoryName = Categories.findOne({_id: category_id}); //find the name of category
		mealsList.push({'category_id': categoryName.name, 'meals': mgbc[category_id]});
	}

	return mealsList;
};

Template.managerMealList.doc = function () {
	var mealsList = groupMeals(getMeals);

	return mealsList;
};
Template.managerCategoryList.categories = function () {
	var categoryList = getCategories(),
		sortedCategory = _.sortBy(categoryList, function (category) {

			return category.name;
		});

	return sortedCategory;
};

AutoForm.hooks({
	insertCategoryForm: {
		onError: function (insert, error, template) {
			console.log('error', error);
			console.log('err templ', template);
		},
		onSuccess: function (operation, result, template) {
			Router.go('managerMealList');
		}
	}
});

AutoForm.hooks({
	insertMealForm: {
		before: {
			//Modified doc before insert it
			insert: function (doc, template) {
				var categoryId = Categories.findOne({name: doc.category_id});
				doc.category_id = categoryId._id;

				return doc;
			}
		},
		onError: function (insert, error, template) {
			console.log('error', error);
		},
		onSuccess: function (operation, result, template) {
			//console.log($("#category").val());

			Router.go('managerMealList');
		}
	}
});