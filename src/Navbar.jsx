import React from "react"
import reactlogo from "./assets/reactjs-icon1.png"
import './App.css'

export default function Navbar() {
    return(
    	
			<nav className='nav'>
				<img src={reactlogo} alt="react-icon" className="nav--logo" />
				<h3 className="nav--text">ReactFacts</h3>
				<h4 className="nav--title">React Course - Project 1</h4>
			</nav>
    	
    )
}