import { useState } from 'react'


function App() {

  const [color, setColor]= useState("grey")

  return (
    <>
      <div 
        className="w-full h-screen"
        style={{backgroundColor: color}}
      >
        <h1 className="text-3xl font-bold text-center">Background Color Changer</h1>
        
        <div className=" fixed bottom-4 flex flex-wrap justify-center inset-x-0">
          <button onClick={()=>setColor("red")} className="bg-red-600 text-white font-bold px-4 py-2 rounded m-2">Red</button>
          <button onClick={()=>setColor("green")} className="bg-green-600 text-white font-bold px-4 py-2 rounded m-2">Green</button>
          <button onClick={()=>setColor("blue")} className="bg-blue-600 text-white font-bold px-4 py-2 rounded m-2">Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
