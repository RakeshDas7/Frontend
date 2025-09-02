import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClicked = (e, name) =>{
    console.log("Hello EveryOne")
    // console.log("Welcome to our console")
    // console.log("Be Happy always!!!")
    console.log(e)
    console.log("name:", name)
    // console.log(e.target)
  }

  const handleDoubleClicked = () => {
    console.log("You clicked twice")
  }

  function handleInputChange(e) {
    console.log("Input value changed")
    console.log(e)
    console.log(e.target)
    console.dir(e.target.value) //The value that input by the user
  }

  return (
    <>
      <h1>Adding Event Listeners</h1>

      {/* <p onClick={() => {console.log("Paragraph Clicked"); console.log("Paragraph once again")}}>This is a demo paragraph</p> */}

      {/* <p onClick={handleClicked} onDoubleClick={handleDoubleClicked}>This is a demo paragraph</p> */}

      <p onMouseEnter={handleClicked}> {/** It is a reference e.g. = handleClicked */}
        Here Also......</p>

      <input type="text" onChange={handleInputChange} />

      <br /> <br />
      <button onClick={(e) => handleClicked(e, "Java Technocrat")}>Click Me✅</button> {/** Here we directly call the handleClicked() and by the help of arrow function and here it will print the Java Technocrat in the console due to we print a statment in the function above */}
      <br /> <br />
      <button onClick={handleClicked("Java Technocrat")}>Click Mee 2</button> {/**Here Java Technocrat wouldn't print in the console */}
    </>
  )
}

export default App
