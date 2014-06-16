Meteor.methods({
//	addMeal: function (meals) {
//		var id = Meals.insert(meals);
//		console.log('id', id);
//		return id;
//	}
//	addCategory: function (category) {
//		var id = Categories.insert(category, function (error, result) {
//
//			if (error) {
//				console.log(error);
//				throw error;
//			} else {
//				console.log('res', result);
//			}
//		});
//		return id;
//	}
});

Meteor.publish("meals", function () {
	return Meals.find();
});
Meteor.publish("categories", function () {
	return Categories.find();
});

