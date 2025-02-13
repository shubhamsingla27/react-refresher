import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0)

  const handleIncrement=()=>{
    setCounter((prevCounter)=>prevCounter+1)
  }

  const handleDecrement=()=>{
    setCounter((prevCounter)=>{
      if (prevCounter===0) return 0
      return prevCounter-1
    })
  }
  
  return (
    <>
    <h1>Hello</h1>
    <h2>{`Counter value is ${counter}`}</h2>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>

  )
}

export default App
