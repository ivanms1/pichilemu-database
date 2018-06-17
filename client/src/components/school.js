import React from 'react';
import moment from 'moment';

const School = ({name, director, start, end, students, staff, id, deleteSchool}) => {
	const newStart = moment(start).calendar();
	const newEnd = moment(end).calendar();

	return (
		<React.Fragment>
		<p>{name}</p>
		<p>{director}</p>
		<p>{newStart}</p>
		<p>{newEnd}</p>
		<p>{staff.length}</p>
		<p>{students.length}</p>
		<button onClick={ () => deleteSchool(id)}>x</button>
		</React.Fragment>
)
}

export default School;