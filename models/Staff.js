const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
	school:{
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	passport: {
		type: String,
		required: true
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
	staffSince: {
		type: Date,
		required: true
	},
	comments: {
		type: String
	}
});

module.exports = Staff = mongoose.model('staff', StaffSchema);