const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

router.get('/', (req, res) => {
	Student.find({}, { name: 1, _id: 0, country: 1 })
	.then(students => res.json(students))
	.catch(err => res.json(err));
});

router.get('/:studentId', (req, res) => {
	Student.findById(req.params.studentId)
	.then(student => {
		if(!student) return res.status(404).json({ msg: 'Student not found' });
		res.json(student);
	})
	.catch(err => res.status(404).jsSon(err));
});

router.post('/', (req, res) => {
	const newStudent = {
		name: req.body.name,
		country: req.body.country,
		passport: req.body.passport,
		birthday: new Date(req.body.birthday),
		balance: req.body.balance,
		visa: req.body.visa,
		comments: req.body.comments
	}

	Student.findOne({ passport: newStudent.passport })
	.then(student => {
		if(student) return res.json({ msg: 'Student already in database' });
		else {
			new Student(newStudent).save()
			.then(student => {
				res.json(student)
			})
			.catch(err => console.log(err));
		}
	})
})

router.put('/:studentId', (req, res) => {
	Student.findOneAndUpdate({_id: req.params.studentId}, { $set: req.body }, { new: true })
	.then(student => {
		if(!student) return res.status(404).json({msg: 'Student not found'})
		res.json(student);
	})
	.catch(err => res.status(400).json(err))
})

module.exports = router;