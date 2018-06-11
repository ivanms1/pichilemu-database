const express = require('express');
const Staff = require('../models/Staff');

const router = express.Router();

router.get('/', (req, res) => {
	Staff.find({}, {name: 1, _id: 0, school: 1, country: 1})
	.then(staff => {
		if(staff.length === 0) return res.status(404).json({ msg: 'There are no staff' });
		res.json(staff)
	})
	.catch(err => res.status(404).json(err));
});

router.get('/:staffId', (req, res) => {
	Staff.findById(req.params.staffId)
	.then(staff => {
		if(!staff) return res.status(404).json({ msg: 'Staff not found' });

		res.json(staff);
	})
	.catch(err => res.status(404).json({ msg: 'Staff not found' }))
})

router.post('/', (req, res) => {
	const newStaff = {
		name: req.body.name,
		school: req.body.school,
		country: req.body.country,
		passport: req.body.passport,
		birthday: req.body.birthday,
		balance: req.body.balance,
		visa: req.body.visa,
		staffSince: req.body.staffSince,
		comments: req.body.comments
	}

	Staff.findOne({ passport: newStaff.passport })
	.then(staff => {
		if(staff) return res.status(400).json({ msg: 'Staff already in database' });

		new Staff(newStaff).save()
		.then(staff => res.json(staff))
	})
	.catch(err => res.status(400).json({ msg: 'Could not add staff' }));
});

router.put('/:staffId', (req, res) => {

	Staff.findByIdAndUpdate(req.params.staffId, { $set: req.body }, { new: true })
	.then(staff => {
		if(!staff) return res.status(404).json({ msg: 'staff not found' });

		res.json(staff);
	})
	.catch(err => res.json({ msg: 'staff not found' }));
})

router.delete('/:staffId', (req, res) => {
	Staff.deleteOne({ _id: req.params.staffId })
	.then(staff => {
		if(!staff) return res.status(404).json({msg: 'Staff not found'});
		res.json({ msg: 'Staff deleted' })
	})
	.catch(err => res.status(404).json({msg: 'Staff not found'}));
});

module.exports = router;