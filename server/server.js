Meteor.startup(function () {

});


//Set which documents will be published to the client

Meteor.publish("meals", function () {
	return Meals.find();
});
Meteor.publish("categories", function () {
	return Categories.find();
});
Meteor.publish("units", function () {
	return Units.find();
});


/**
 * Allow user to delete doc from db
 */
Meals.allow({
	remove: function () {
		return true;
	}
});
