import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [Password, setPassword] = useState("")
  const [Num, setNum] = useState(false)
  const [specialChar, setspecialChar] = useState(false)
  const [Length, setLength] = useState(8)

  function fun(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(setNum) str+="0123456789";
    if(setspecialChar) str+="!@#$%^&*()_+{}[]~";
    
    for(let i=1; i<=Array.length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
     }
     setPassword(pass)
  }

  const passwordGenerator=useCallback(fun,[Length,Num,specialChar,setPassword])
  return (
    <>
    <h3>True False switch case bnana hai using function</h3>
      <div class="container">
      <div class = "upperContainer">
        <input type="text" placeholder='Password' class="passwordField"></input>
        <button class = "copyButton">Copy</button>
      </div>
     
      <div class = "lowerContainer">
       <div class = "left-lowerContainer">
       <input 
        type='range' 
        className = "cursor-pointer" 
        min={6} max={25} 
        value = {Length}
        onChange={(e)=>{setLength(e.target.value)}}
        >
        
        </input>
        <label>Length: {Length}</label>
       </div>
       <div class = "right-lowerContainer">
       <input 
       type='checkbox'
       id='chbx1'
       onChange={()=>{
        setNum((prev)=>!prev)}}
        />
         <label for="chbx1">Number</label>

         <input 
       type='checkbox'
       id='chbx2'
       onChange={()=>{
        setspecialChar((prev)=>!prev)}}
        />
         <label for="chbx2">specialCharacter</label>
       </div>
      </div>
      </div>
    </>
  )
}

export default App
