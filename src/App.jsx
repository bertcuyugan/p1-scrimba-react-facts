import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'



export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
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