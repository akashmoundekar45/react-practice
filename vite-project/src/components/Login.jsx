import React, { useContext, useState } from 'react'
import myContext from './context/UserContext'

const Login = () => {

  // const [firstname, setfirstname]= useState('') //<--- // useState
  // const [Lastname, setLastname]= useState('')
  // const [Email, setEmail]= useState('')
  // const [Passward, setpassward]= useState('')

  const {setUserData,setisLogin,userData}=useContext(myContext) //!destruchering

  function handleChange(e){
    setUserData(prev=>({...prev,[e.target.name] : e.target.value }))
      
   

      console.log(userData) // object create
  }

  function handleSubmit(){
      // setUserData({firstname:firstname, Lastname:Lastname, Email:Email, Passward:Passward}
      setisLogin(true)
  }
  
   
  return (
 <div>
  <form action="/" className='form' onSubmit={handleSubmit}>
            {/* <label htmlFor="">first Name</label> */}
            <input type="text" name='firstname' placeholder='first Name' onChange={(handleChange)}/>
              {/* <label htmlFor="">Last Name</label> */}
            <input type="text" name='lastname' placeholder='last Name'onChange={(handleChange)}/>
             {/* <label htmlFor="">Email</label> */}
            <input type="email" name='Email' placeholder='Email'onChange={(handleChange)}/>

             <input type="Passward" name='Passward' placeholder='Passward'onChange={(handleChange)}/>
            {/* <input type="Passward" placeholder='Passward'onChange={(e)=>console.log(e.target.value)}/> */}

            <button type="Submit">Submit</button>
        </form>
 </div>
  )
}

export default Login
