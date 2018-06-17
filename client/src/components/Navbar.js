import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/schools">Schools</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/staff">Staff</Link></li>
    </ul>
	)

export default Navbar;