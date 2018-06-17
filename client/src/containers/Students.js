import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Student from '../components/Student';


export default class Students extends Component {
	state = {
		students: null,
		school: null,
		date: null,
		country: null

	}


	handleChange = this.handleChange.bind(this);

	handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }



	render(){
		return(
			<div className="students">
				<h3>Search Students</h3>
				<form className="student-form">
					<p>School</p>
					<p>Date</p>
					<p>Country</p>
					<input type="submit" value="Search"/>
					<select name="school" onChange={this.handleChange}>
						<option value="DTS">DTS</option>
						<option value="FCM">FCM</option>
						<option value="SBS">SBS</option>
						<option value="BCC">BCC</option>
					</select>
					<input name="date" onChange={this.handleChange} type="date"/>
					<input name="country" onChange={this.handleChange} type="text" placeholder="Country"/>
				</form>
				{
		              this.state.students ?
		              this.state.students.map(student => <Student
		                                                key={student._id}
		                                                name={student.name}
		                                                school={student.school}
		                                                country={student.country}
		                                                passport={student.passport}
		                                                birthday={student.birthday}
		                                                balance={student.balance}
		                                                id={student._id}
		                                                visa={student.visa}
		                                                deleteSchool={this.deleteSchool}
		                                                />
		                                    )
		              :
		              this.state.empty ? 'No students' : 'Loading'
		              }
		        <Link to="/addstudent"><button>Add student</button></Link>
			</div>
			)
	}
}