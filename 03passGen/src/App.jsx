import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef(null)

  const generatePassword = useCallback(() => {
    const letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let chars = letters
    if(numbers) chars += '0123456789'
    if(symbols) chars += '!@#$%^&*()_+'

    let createdPassword = ''

    for(let i=0; i<length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      createdPassword += chars[randomIndex]
    }
    setPassword(createdPassword)
  },[length, numbers, symbols])

  useEffect(() => {
    generatePassword()
  }, [length, numbers, symbols, generatePassword])

  const copyPass=()=>{
    passRef.current.select()
    document.execCommand('copy')
    alert('Password copied')
  }

  return (
    <>
      <h1 className='text-4xl text-center text-white'>PassGen</h1>
      <div className='w-full max-w-md mx-auto rounded-lg bg-gray-500 my-8 px-4 py-2'>
        <div className='flex rounded-lg'>
          <input ref={passRef} value={password} readOnly className=' w-full rounded-lg p-2 my-4 text-center text-white bg-gray-800' />
          <button onClick={copyPass}>copy</button>
        </div>
        <div className='flex items-center'>
          <input type="range" min="8" max="24" value={length}
            onChange={(e) => setLength(e.target.value)} className='m-4' />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center'>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
          <label className='text-white'>Include Numbers</label>
        </div>
        <div className='flex items-center'>
          <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
          <label className='text-white'>Include Symbols</label>
          </div>
      </div>
    </>
  )
}

export default App
