import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]= useState(0)

  const decre = () => {
    if (counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Hello</h1>
      <h1>Counter Value:{counter}</h1>

      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>decre()}>Decrement</button>
    </>
  )
}

export default App
