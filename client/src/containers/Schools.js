import React, { Component } from 'react';
import axios from 'axios';
import School from '../components/school';

class Schools extends Component {
    state = {
      schools: null,
      name: '',
      director: '',
      start: '',
      end: '',
      empty: false
    };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  deleteSchool = this.deleteSchool.bind(this);

  componentDidMount(){
    axios.get('/schools')
    .then(res => {
      const schools = res.data;
      console.log(schools)
      this.setState({ schools });
    })
    .catch(err => {
      console.log(err.response.data)
      this.setState({empty: true})
    }) 
  }

  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const school = {
      name: this.state.name,
      director: this.state.director,
      start: this.state.start,
      end: this.state.end
    }

    axios.post('/schools', school)
    .then(res => console.log(res.data))
    .then(() => {
      axios.get('/schools')
      .then(res => {
      const schools = res.data;
      this.setState({ schools });
      })
    })
    .catch(err => console.log(err.response.data))
  }

  deleteSchool(id){
    axios.delete(`/schools/${id}`)
    .then(res => console.log(res.data))
    .then(() => {
      axios.get('/schools')
      .then(res => {
      const schools = res.data;
      this.setState({ schools });
      })
    })
    .catch(err => console.log(err.response.data))
  }

  render() {
    return (
        <div>
          <h1>Schools</h1>
            <div className="schools">
                <h3>Name</h3>
                <h3>Director</h3>
                <h3>Start</h3>
                <h3>End</h3>
                <h3>Students</h3>
                <h3>Staff</h3>
                <h3>Delete</h3>
              {
              this.state.schools ?
              this.state.schools.map(school => <School
                                                key={school._id}
                                                director={school.director}
                                                start={school.start}
                                                end={school.end}
                                                students={school.students}
                                                staff={school.staff}
                                                name={school.name}
                                                id={school._id}
                                                deleteSchool={this.deleteSchool}
                                                />
                                    )
              :
              this.state.empty ? 'No Schools' : 'Loading'
              }
            </div>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.name} onChange={this.handleChange} name="name" type="text"/>
              <input value={this.state.director} onChange={this.handleChange} name="director" type="text"/>
              <input value={this.state.start} onChange={this.handleChange} name="start" type="text"/>
              <input value={this.state.end} onChange={this.handleChange} name="end" type="text"/>
              <input type="submit"/>
            </form>
        </div>
    );
  }
}

export default Schools;