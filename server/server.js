Meteor.startup(function () {

});

/**
 * Allow user to make inserting, deleting and removing documents in the collections
 */
_.each([Meals, Categories], function (collection) {
	collection.allow({
		insert: function() {
			return true;
		},
		update: function() {
			return true;
		},
		remove: function() {
			return true;
		},
		fetch: []
	});
});


//Set which documents will be published to the client

Meteor.publish("meals", function () {
	return Meals.find();
});
Meteor.publish("categories", function () {
	return Categories.find();
});



