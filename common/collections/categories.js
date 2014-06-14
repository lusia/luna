Categories = new Meteor.Collection('categories', {
	schema: {
		name: {
			type: String,
			label: "Name",
			max: 50,
			index: 1,
			unique: true
		}
	}
});

