Meals = new Meteor.Collection("meals", {
	schema: {
		name: {
			type: String,
			label: "Name",
			max: 50,
			index: 1,
			unique: true
		},
		price: {
			type: Number,
			label: function () {
				var unit = unitConfigure();

				return "Price " + "[" + unit.price.unit + "]";
			}
		},
		calories: {
			type: Number,
			optional: true,
			label: function () {
				var unit = unitConfigure();

				return "Calories " + "[" + unit.calories.unit + "]";
			}
		},
		category_id: {
			type: String,
			label: "Category"
		},
		description: {
			type: String,
			label: "Description"
		},
		weight: {
			type: Number,
			optional: true,
			label: function () {
				var unit = unitConfigure();

				return "Weight " + "[" + unit.weight.unit + "]";
			}
		}
	}
});
