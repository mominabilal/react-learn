import { useState, useCallback, useEffect, useRef  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const[password, setPassword] = useState('')
  //use Ref hook
  const passwordRef= useRef(null)

  //function to genrate password
  const passwordGenerator= useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;':\",.<>?`~"
    for(let i=0; i<length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed,charAllowed,setPassword]) 

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
  // to call the function as soon as the page loads
  useEffect(() =>{passwordGenerator()}, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-gray-500 py-3 bg-gray-700'>
        <h1 className='text-4xl text-center text-white my-5'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden
        mb-4'>
          <input
          type="text"
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
          className='outline-none w-full py-2 px-3 bg-white'/>
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-orange-400 text-white
            px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={e=>{setLength(e.target.value)}}/>
            <label className='text-white'>
              Length:{length}
            </label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id="numInput"
            onChange={()=>{setNumAllowed((prev)=> !prev)}}/>
            <label className='text-white'>
              Numbers
            </label> 
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{setCharAllowed((prev)=> !prev)}}/>
            <label className='text-white'>
              Characters:
            </label> 
          </div>
        </div>
      </div>

    </>
  )
}

export default App
