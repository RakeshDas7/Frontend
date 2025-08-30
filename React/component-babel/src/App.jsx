import React from 'react'
import './App.css'

function App() { // it's a component due to it returns a HTML like code and component must be start with pascel case
  const a = 10
  const b = 20
  console.log(a+b)

  return (
    <React.Fragment> {/* React Fragment, We can also use <></> instead of <React.Fragment></React.Fragment>*/}
      <h1>{a + b === 30 ? "React is easy" : "React is hard"}</h1> { /*condition rendering just like if-else statement*/} 
      <h2>Mentor : <b>Sai Pranab</b></h2>
    </React.Fragment>
    ) // it returns react element
}

const val = App()
console.log('value is :', val)

export default App

// function app() {
//   return <h1>Java Technocrat</h1>
// }
// export { app }
