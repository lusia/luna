Router.map(function () {
	this.route("main", {
		path: "/",
		template: 'main',
		layoutTemplate: "layout"
	});
	this.route("managerMealList", {
		path: "/meals-list",
		template: 'managerMealList',
		layoutTemplate: "layout"
	});
	this.route("managerMealLayout", {
		path: "/add-meal",
		template: 'managerMealLayout',
		layoutTemplate: "layout"
	});
	this.route("managerCategoryLayout", {
		path: "/add-category",
		template: 'managerCategoryLayout',
		layoutTemplate: "layout"
	});
	this.route("managerMealUpdateLayout", {
		path: "/update-meal/:_id",
		template: 'managerMealUpdateLayout',
		layoutTemplate: "layout",
		data: function () {
			Session.set('currentMealId', this.params._id);
		}

	});
});

