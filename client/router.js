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
			Session.set('currentMealIdToUpdate', this.params._id);
		}
	});
	this.route("managerMealDelete", {
		path: "/delete-meal/:_id",
		template: 'managerMealDelete',
		layoutTemplate: "layout",
		data: function () {
			Session.set('currentMealIdToDelete', this.params._id);
		}
	});
	this.route("managerCategoryTable", {
		path: "/categories-table",
		template: 'managerCategoryTable',
		layoutTemplate: "layout"
	});
	this.route("managerCategoryUpdateLayout", {
		path: "/update-category/:_id",
		template: 'managerCategoryUpdateLayout',
		layoutTemplate: "layout",
		data: function () {
			Session.set('currentCategoryIdToUpdate', this.params._id);
		}
	});
});