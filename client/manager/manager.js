Router.map(function () {
	this.route("firstView", {
		path: "/",
		template: 'firstView',
		layoutTemplate: "mainManagerTempl"
	});
	this.route("mealsListView", {
		path: "/meals-list",
		template: 'mealsListView',
		layoutTemplate: "mainManagerTempl",
		yieldTemplates: {
			breadCrumbs: {to: "breadCrumbs"}
		},
		data: {
			views_name: "Meals List",
			class_active: "active"
		}
	});
});

Meteor.subscribe("meals");

Template.mealsListView.doc = function () {

	var data = Meals.find(), arr = [];

	var result = _.groupBy(data.fetch(), 'category')

	for (var key in result) {

		arr.push({'category': key, 'meals': result[key]});
	}

	return arr;
}
