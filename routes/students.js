const express = require('express');
const Student = require('../models/Student');

const router = express.Router();

router.get('/', (req, res) => {
	Student.find({}, { name: 1, country: 1, school: 1 })
	.then(students => {
		if(students.length === 0) return res.status(404).json({msg: 'There are no students'})
		res.json(students)
	})
	
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
		school: req.body.school,
		country: req.body.country,
		passport: req.body.passport,
		birthday: req.body.birthday,
		balance: req.body.balance,
		visa: req.body.visa,
		comments: req.body.comments
	}

	Student.findOne({ passport: newStudent.passport })
	.then(student => {
		if(student) return res.status(400).json({ msg: 'Student already in database' });
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
});

router.delete('/:studentId', (req, res) => {
	Student.deleteOne({ _id: req.params.studentId })
	.then(student => {
		if(!student) return res.status(404).json({msg:'Student not found'});
		res.json({msg: 'Student deleted'})
	})
	.catch(err => res.status(404).json(err));
})


module.exports = router;