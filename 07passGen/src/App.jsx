import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumbers, setAllowNumbers] = useState(false)
  const [allowSymbols, setAllowSymbols] = useState(false)

  const [password, setPassword] = useState("")

  const passRef=useRef(null)

  const passwordGenerator= useCallback(()=>{
    let str= "asdfghjklqwertyuiopzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    if (allowNumbers) str+="1234567890"
    if (allowSymbols) str+="!@#$%^&*()_+"

    let pass=""
    for (let i=0; i<length;i++){
      const char=Math.floor(Math.random()*str.length)+1
      pass+=str[char]
    }
    setPassword(pass)
  },[length, allowNumbers, allowSymbols, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, allowNumbers, allowSymbols, passwordGenerator])

  const handleCopy=()=>{
    navigator.clipboard.writeText(password)
    passRef.current.select()
  }

  return (
    <>
    <h1 className='text-center text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto rounded-lg bg-gray-500 my-8 px-4 py-2'>
      <div className='flex'>
        <input type="text" ref={passRef} value={password} className='w-full rounded-lg p-2 my-4 bg-white text-amber-600'/>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div className='flex gap-4'>
      <div className='flex items-center'>
        <input type="range" min="8" max="24" value={length}
          onChange={(e)=>setLength(e.target.value)} className='m-4 w-24'/>
        <lable className=" text-nowrap">Length: {length}</lable>
      </div>
      <div className='flex items-center'>
        <input type="checkbox" className='m-2' checked={allowNumbers} onChange={()=>setAllowNumbers(prev=>!prev)} />
        <lable>Numbers</lable>
      </div>
      <div className='flex items-center'>
        <input type="checkbox" className='m-2' checked={allowSymbols} onChange={()=>setAllowSymbols(prev=>!prev)} />
        <lable>Symbols</lable>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default App
