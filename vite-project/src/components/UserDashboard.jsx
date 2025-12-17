import React, { useContext, useState } from 'react'
import myContext from './context/UserContext'

const UserDashboard = () => {

    // console.log(useContext(myContext))   // very important

    let {name,setName} = useContext(myContext) // how to use object
    //change a data

    // const[data,setData]= useState('')
    // console.log(data)
   
    return (
        <div className='dashboard'>
            <h2>
                user name is {name} 
            </h2>
            <input type="text" placeholder='enter Name' onChange={(e)=>setName(e.target.value) } />
        </div>
    )
}

export default UserDashboard