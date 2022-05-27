import './Logo.css'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo"></Link>
        <img src={logo} alt="logo" />
    </aside>