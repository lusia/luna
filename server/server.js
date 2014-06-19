//Set which documents will be published to the client

Meteor.publish("meals", function () {
	return Meals.find();
});
Meteor.publish("categories", function () {
	return Categories.find();
});

