const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
	name: {
		type: String,
		required: true,
		unique: true
	},
	school: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	passport: {
		type: String,
		required: true,
		unique: true
	},
	birthday: {
		type: Date,
		required: true
	},
	balance: {
		type: Number,
		required: true
	},
	visa: {
		type: Boolean,
		required: true
	},
	comments: {
		type: String
	}
});

module.exports = Student = mongoose.model('students', StudentSchema);