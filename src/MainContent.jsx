import React from "react"
import reacthalflogo from "./assets/react-half.png"
import './App.css'

export default function MainContent() {
    return(
    <main className="main">
        <h1 className="main--title">Fun Facts about React</h1>
        
        {/* <img src={reacthalflogo} alt="react-half-log" width="40px" className="main--logo"/> */}
        
        <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K starts on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    )
}