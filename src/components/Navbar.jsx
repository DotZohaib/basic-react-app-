import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/textform">TextForm</Link>
        </li>
    </ul>
</nav>
  )
}

export default Navbar