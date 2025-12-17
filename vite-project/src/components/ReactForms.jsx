import React from 'react'

const ReactForms = () => {
  
 const [firstname, setfirstname]= useState('') //<--- // useState
  const [Lastname, setLastname]= useState('')
  const [Email, setEmail]= useState('')
  const [Passward, setpassward]= useState('')

  const {setUserData,setisLogin}=useContext(myContext) //!destruchering
  function handleSubmit(){
      setUserData({firstname:firstname, Lastname:Lastname, Email:Email, Passward:Passward})
      setisLogin(true)
  }
  
   
  return (
 <div>
  <form action="/" className='form' onSubmit={handleSubmit}>
            {/* <label htmlFor="">first Name</label> */}
            <input type="text" placeholder='first Name' onChange={(e)=>setfirstname(e.target.value)}/>
              {/* <label htmlFor="">Last Name</label> */}
            <input type="text" placeholder='last Name'onChange={(e)=>setLastname(e.target.value)}/>
             {/* <label htmlFor="">Email</label> */}
            <input type="email" placeholder='Email'onChange={(e)=>setEmail(e.target.value)}/>
             <input type="Passward" placeholder='Passward'onChange={(e)=>setpassward(e.target.value)}/>
            {/* <input type="Passward" placeholder='Passward'onChange={(e)=>console.log(e.target.value)}/> */}

            <button type="Submit">Submit</button>
        </form>
 </div>
  )
}

export default ReactForms