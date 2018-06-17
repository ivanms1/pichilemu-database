const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000

const students = require('./routes/students');
const staff = require('./routes/staff');
const schools = require('./routes/schools');

app.use(bodyParser.json());
app.use(logger('dev'));

const db = require('./config/keys').mongoURI

mongoose.connect(db)
.then((err, client) => {
	console.log('MongoDB connected')
})
.catch(err => console.log(serr));

app.use('/students', students);
app.use('/staff', staff);
app.use('/schools', schools);

app.get('/', (req, res) => {
	res.json({pichi: 'Pichilemu database'})
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})