const express = require('express');
const School = require('../models/School');

const router = express.Router();

router.get('/', (req, res) => {
	School.find({}, { name: 1, school: 1, start: 1 })
	.then(schools => {
		if(schools.length === 0) return res.status(404).json({msg: 'There are no schools'});

		res.json(schools);
	})
	.catch(err => res.json({msg: 'There are no schools'}));
});

router.get('/:schoolId', (req, res) => {
	School.find({_id: req.params.schoolId})
	.then(school => {
		if(!school) return res.status(404).json({ msg: 'School not found' });

		res.json(school)
	})
	.catch(err => res.json({msg: 'School not found'}));
});

router.post('/', (req, res) => {
	const newSchool = {
		name: req.body.name,
		director: req.body.director,
		start: req.body.start,
		finish: req.body.finish,
		comments: req.body.comments
	}

	School.findOne({ start: newSchool.start, name: newSchool.name })
	.then(school => {
		if(school) return res.status(400).json({ msg: 'School already exists' });

		new School(newSchool).save()
		.then(school => res.json(school))
	})
	.catch(err => res.status(400).json({ msg: 'Could not add school' }));
});

router.delete('/:schoolId', (req, res) => {
	School.findByIdAndDelete(req.params.schoolId)
	.then(school => {
		if(!school) return res.status(400).json({ msg: 'School not found' });

		res.json(school);
	})
	.catch(err => res.json({msg: 'School not found'}));
});

module.exports = router;