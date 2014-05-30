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
	this.route("addNewMeal", {
		path: "/add-meal",
		template: 'addNewMeal',
		layoutTemplate: "mainManagerTempl"
	});
	this.route("addNewCategory", {
		path: "/add-category",
		template: 'addNewCategory',
		layoutTemplate: "mainManagerTempl"
	});
});