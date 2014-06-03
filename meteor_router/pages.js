Router.map(function () {
	this.route("firstView", {
		path: "/",
		template: 'firstView',
		layoutTemplate: "main"
	});
	this.route("managerMealList", {
		path: "/meals-list",
		template: 'managerMealList',
		layoutTemplate: "main"
	});
	this.route("managerMealLayout", {
		path: "/add-meal",
		template: 'managerMealLayout',
		layoutTemplate: "main"
	});
	this.route("managerCategoryLayout", {
		path: "/add-category",
		template: 'managerCategoryLayout',
		layoutTemplate: "main"
	});
	this.route("managerMealUpdateLayout", {
		path: "/update-meal",
		template: 'managerMealUpdateLayout',
		layoutTemplate: "main"
	});
});