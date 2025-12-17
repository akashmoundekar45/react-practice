import myContext from "./UserContext";
import React, { useState } from 'react'

const UserContextProvider = ({children}) => {
     const [isLogin, setisLogin] = useState(false)  //!   false--> loginpage , true hai--> profile//home page
    // const[name,setName]= useState("pankaj")
    const[userData, setUserData]= useState({})

    return (
       
        <myContext.Provider value={{userData,setUserData,isLogin,setisLogin}}> 
            {children}
        </myContext.Provider>
       
    )
}

export default UserContextProvider