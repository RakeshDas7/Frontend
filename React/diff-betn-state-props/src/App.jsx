import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'


function App() {
  console.log("Parent Component")
  const [name, setName] = useState('Rahul')
  return (
      <div style={{padding: '20px'}}>
          <h1>React Props v/s States</h1>

          <Greeting name={name} />

          <button style={{padding: '20px', margin: '20px'}} onClick={() => { setName((prev) => prev + 1)}}>Click Me</button>
      </div>
  )
}

export default App