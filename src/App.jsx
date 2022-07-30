import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactlogo from "./assets/reactjs-icon1.png"
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <img src={reactlogo} alt="react-icon" width="80px" />

      <h1>Fun Facts about React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K starts on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprose apps, including mobile apps</li>
      </ul>
    </div>
  )
}



/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */