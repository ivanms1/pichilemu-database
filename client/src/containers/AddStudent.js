import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudent extends Component {
	state = {
		name: '',
		school: 'DTS',
		country: '',
		passport: '',
		birthday: '',
		balance: '',
		visa: ''

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
  			name: '',
			school: 'DTS',
			country: '',
			passport: '',
			birthday: '',
			balance: '',
			visa: false
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
				<input value={this.state.name} name="name"
					onChange={this.handleChange}
					type="text"
					placeholder="Name" required/>
				<select value={this.state.schoool} name="school" onChange={this.handleChange} required>
					<option value="DTS">DTS</option>
					<option value="FCM">FCM</option>
					<option value="SBS">SBS</option>
					<option value="BCC">BCC</option>
					</select>
				<input value={this.state.country} name="country"
					onChange={this.handleChange}
					type="text"
					placeholder="Country" required/>
				<input value={this.state.passport} name="passport"
					onChange={this.handleChange}
					type="text"
					placeholder="Passport" required/>
				<input value={this.state.birthday} name="birthday"
					onChange={this.handleChange}
					type="date"
					placeholder="Birthday" required/>
				<input value={this.state.balance} name="balance"
					onChange={this.handleChange}
					type="number"
					placeholder="Balance" required/>
				<input value={this.state.visa} name="visa"
					onChange={this.handleChange}
					type="checkbox"/>
				<input value="Create Student" type="submit"/>
  			</form>
  			)
  	}

}