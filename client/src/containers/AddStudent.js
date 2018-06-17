import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
	state = {
		name: null,
		school: null,
		country: null,
		passport: null,
		birthday: null,
		balance: null,
		visa: null

	}

	handleChange = this.handleChange.bind(this);
	handleSubmit = this.handleSubmit.bind(this)

	handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    	})
  	}

  	handleSubmit(e){
  		e.preventDefault();

  		const student = {
  			name: this.state.name,
			school: this.state.school,
			country: this.state.country,
			passport: this.state.passport,
			birthday: this.state.birthday,
			balance: this.state.balance,
			visa: this.state.visa
  		}

  		axios.post('/students', student)
  		.then(res => alert(`${res.data.name} added`))
  		.then(() => this.setState({
  			name: null
			school: null,
			country: null,
			passport: null,
			birthday: null,
			balance: null,
			visa: null
			})
  		)
    	.catch(err => console.log(err.response.data))
  	}

  	render(){
  		return (
  			<form onSubmit={this.handleSubmit} className="add-student">
  				<p>Name</p>
				<p>School</p>
				<p>Country</p>
				<p>Passport</p>
				<p>Birthday</p>
				<p>Balance</p>
				<p>Visa</p>
				<input name="name"
					onChange={this.handleChange}
					type="text"
					placeholder="Name"/>
				<select name="school" onChange={this.handleChange}>
					<option value="DTS">DTS</option>
					<option value="FCM">FCM</option>
					<option value="SBS">SBS</option>
					<option value="BCC">BCC</option>
					</select>
				<input name="country"
					onChange={this.handleChange}
					type="text"
					placeholder="Country"/>
				<input name="passport"
					onChange={this.handleChange}
					type="text"
					placeholder="Passport"/>
				<input name="birthday"
					onChange={this.handleChange}
					type="date"
					placeholder="Birthday"/>
				<input name="balance"
					onChange={this.handleChange}
					type="number"
					placeholder="Balance"/>
				<input name="visa"
					onChange={this.handleChange}
					type="checkbox"/>
				<input value="Create Student" type="submit"/>
  			</form>
  			)
  	}

}