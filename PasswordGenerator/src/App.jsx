import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
      const[length,setLength]=useState(8)
      const[no,setNo]=useState(false)
      const[special,setSpecial]=useState(false)
      const[password,setPassword]=useState("")

      const passwordRef=useRef(null)
      const Copypaste= useCallback(()=>{
         passwordRef.current?.select()
         //password.current?.setSelectionRange(0,999)
          window.navigator.clipboard.writeText(password)
      },[password])
      const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVMXYZabcdefghijklmnopqrstuvwxyz"
        if(no) str+="1234567890"
        if(special) str+="!@#$%^&*()"
        for(let i=0;i<length;i++){
           var char=Math.floor(Math.random()*str.length+1)
           pass+=str.charAt(char)
        }
  
        setPassword(pass)
        
      },[length,no,special,setPassword])
     useEffect(()=>{
        passwordGenerator()
     },[length,no,special,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
     type="text"
     value={password}
     className='outline-none w-full py-1 px-3'
     placeholder='password'
     readOnly
     ref={passwordRef}/>
     <button onClick={Copypaste}>
      Copy</button></div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min="0"
          max="100"
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={no}
           
            id="numberInput"
            onChange={(e)=>{
              setNo(!e.target.defaultChecked)
            }}/>
            <label htmlFor="numberInput">Number: {no?"true":"false"}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={special}
           
            id="charInput"
            onChange={(e)=>{
              setSpecial(!e.target.defaultChecked)
            }}/>
            <label htmlFor="charInput">Number: {special?"true":"false"}</label>
          </div>
          </div>
          </div>
    </>
  )
}

export default App
