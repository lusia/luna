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
			type: String,
			label: "Price"
		},
		calories: {
			type: Number,
			label: "Calories",
			optional : true
		},
		category_id: {
			type: String,
			label: "Category"
		},
		description : {
			type : String,
			label : "Description"
		},
		weight : {
			type : Number,
			label : "Weight",
			optional : true
		}
	}
});
