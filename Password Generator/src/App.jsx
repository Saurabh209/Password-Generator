import { useState, useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [Password, setPassword] = useState("")
  const [Num, setNum] = useState(false)
  const [specialChar, setspecialChar] = useState(false)
  const [Length, setLength] = useState(8)




  function myFun(){
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(Num==true){
      str+="0123456789"
    } 
    if(specialChar==true){
      str+="!@#$%^&*_+~"
    } ;
    
    for(let i=1; i<=Length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
     }
     setPassword(pass)
  }

  function copyToBoard(){

    window.navigator.clipboard.writeText(Password)
  }


  const passwordGenerator=useCallback(myFun,[Length,Num,specialChar,setPassword])


  const copyPasswordToBoard = useCallback(copyToBoard,[Password])


  useEffect(()=>{passwordGenerator()},[Length,Num,specialChar,passwordGenerator])
  return (
    <>
    
      <div className="container">
      <div className = "upperContainer">
        <input type="text" 
        placeholder='Password' 
        className="passwordField" 
        value={Password} 
        readOnly
      

        />
        <button onClick={copyPasswordToBoard} className = "copyButton">Copy</button>
      </div>
     
      <div className = "lowerContainer">
       <div className = "left-lowerContainer">
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
       <div className = "right-lowerContainer">
       <input 
       type='checkbox'
       id='chbx1'
       onChange={()=>{
        setNum((prev)=>!prev)}}
        />
         <label htmlFor="chbx1">Number</label>

         <input 
       type='checkbox'
       id='chbx2'
       onChange={()=>{
        setspecialChar((prev)=>!prev)}}
        
        />
         <label htmlFor="chbx2">specialCharacter</label>
        

       </div>
      </div>
      </div>
    </>
  )
}

export default App
