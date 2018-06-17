import React, { Component } from 'react';
import Schools from './containers/Schools';
import Navbar from './components/Navbar';
import Students from './containers/Students';
import AddStudent from './containers/AddStudent'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar/>
            <Route path="/schools" component={Schools}/>
            <Route path="/students" component={Students}/>
            <Route path="/staff" component={Staff}/>
            <Route path="/addstudent" component={AddStudent}/>
        </div>
      </Router>
    );
  }
}

const Staff = () => (
  <h1>Staff</h1>
  )

export default App;
