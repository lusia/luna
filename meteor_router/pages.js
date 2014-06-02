Router.map(function () {
	this.route("firstView", {
		path: "/",
		template: 'firstView',
		layoutTemplate: "main"
	});
	this.route("mealsListView", {
		path: "/meals-list",
		template: 'mealsListView',
		layoutTemplate: "main"
	});
	this.route("addNewMeal", {
		path: "/add-meal",
		template: 'addNewMeal',
		layoutTemplate: "main"
	});
	this.route("addNewCategory", {
		path: "/add-category",
		template: 'addNewCategory',
		layoutTemplate: "main"
	});
	this.route("updateMeal", {
		path: "/update-meal",
		template: 'updateMeal',
		layoutTemplate: "main"
	});
});