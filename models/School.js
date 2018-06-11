const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	students: [],
	staff: [],
	director: {
		type: String,
		required: true
	},
	start:{
		type: Date,
		required: true
	},
	finish:{
		type: Date,
		required: true
	},
	comments: {
		type: String
	}
});

module.exports = School = mongoose.model('schools', SchoolSchema);