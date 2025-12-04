import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Conditionalrendering from './components/Conditionalrendering.jsx'
import Other from './components/other.jsx'
import Login from './components/login.jsx'
import Profile from './components/Profile.jsx'
import UserEffectDemo from './components/UseEffectDemo.jsx'
import DataFeching from './components/DataFeching.jsx'  


// function App() {
//     let url ="https://th.bing.com/th/id/OIP.1xX4yvvHcM7IhjbfG1tRrQHaEK?w=290&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"

//     let name =" akash"
 
//   return (
//     <>
//        <h1>{name}</h1>     
//        <Navbar title={name} age="20" url={url}/>
//     </>
//   )
// }

// export default App


//!       23/11/25 (12:28 am) *********************************************************************************************************************

//*  props  -->  used to pass data from one component to another component
//*  props  -->  props is read only
//*  props  -->  props is an object
//*  props  -->  props can be used in functional as well as class component
//*  props  -->  props is used to pass data from parent component to child component



//! conditional rendering ******************************************************** self study *********************************************
function App() {
        let isLogin=true

  return (
    <>
        
        {/* <h1> Conditional Rendering in React </h1> */}

        {/* importing navbar from Navbar.jsx */}
        <Navbar text ={isLogin?'logout':'login'}/>     {/* logic*/}
        {
          isLogin? <Login/>: <Profile/>
        }
        {/* <Conditionalrendering/> */}
        {/* <Other/> */}
        <UserEffectDemo/>
     
    </>
  )
}




export default App


//you can import all files thast why you can write a logic in the app.jsx

//!  29/11/2025
// what is a condtion rendering 

//!30/11/2025
//? agar kisi button pr click krne ke bad or replay krta hai to use state khate hai use state padna baki hai

//! use effect


