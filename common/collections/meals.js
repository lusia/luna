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
			label: "Price"
		},
		calories: {
			type: Number,
			label: "Calories"
		},
		category: {
			type: [String],
			label: "Category"
		}
	}
});
