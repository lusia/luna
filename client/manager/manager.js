$(".warningLabel").hide();

Meteor.subscribe("meals");
Meteor.subscribe("categories");

/**
 * Get all meals from collection
 */
var getMeals = function () {
	return Meals.find().fetch();
};

/**
 * Get all categories from collection
 */
var getCategories = function () {
	return Categories.find().fetch();
};


/**
 * Find category by id
 * @param id
 */
var findCategoryName = function (id) {
	var category = Categories.findOne({_id: id});
	return category;
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
		categoryName = findCategoryName(category_id);
		mealsList.push({'category': categoryName.name, 'meals': mgbc[category_id]});
	}

	return mealsList;
};

Template.managerMealList.doc = function () {
	var mealsList = groupMeals(getMeals);

	return mealsList;
};
Template.managerCategoryList.categories = function () {
	var categoryList = getCategories(),
		sortedCategory = _.sortBy(categoryList, function (category) { //sort categories

			return category.name;
		});

	return sortedCategory;
};

/**
 * Get meal to update
 */
Template.managerMealUpdate.editingDoc = function () {
	var meal = Meals.findOne({_id: Session.get("currentMealId")});

	return meal;
};

// Hooks //

/**
 * Hooks for 'add meal' form
 */
AutoForm.hooks({
	insertMealForm: {
		before: {
			//Replace category name by category id
			insert: function (doc) {
				var price = doc.price,
					categoryId = Categories.findOne({name: doc.category_id});
				doc.category_id = categoryId._id;
				doc.price = parseFloat(price);

				return doc;
			}
		},
		onError: function (insert, error, template) {
			console.log('error', error);
			console.log('insert', insert);
			console.log('templ', template);
		},
		onSuccess: function () {
			Router.go('managerMealList');
		}
	}
});

/**
 * Hooks for 'add category' form
 */
AutoForm.hooks({
	insertCategoryForm: {
		onError: function (insert, error, template) {
			console.log('error', error);
			console.log('err templ', template);
		},
		onSuccess: function () {
			Router.go('managerMealLayout');
		}
	}
});

/**
 * Hooks for 'update meal' form
 */
AutoForm.hooks({
	updateMealForm: {
		before: {
			//Replace category name by category id in updated doc
			update: function (docId, modifier) {
				var catName = modifier.$set.category_id,
					categoryId = Categories.findOne({name: catName});
				modifier.$set.category_id = categoryId._id;

				return modifier;
			}
		},
		onSuccess: function () {
			Router.go('managerMealList');
		}
	}
});