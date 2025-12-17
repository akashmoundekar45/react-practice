import { Component, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Conditionalrendering from './components/Conditionalrendering.jsx'
import Other from './components/other.jsx'
//import Login from './components/login.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UseEffectDemo from './components/UseEffectDemo.jsx'
import { navItem, url } from './data.js'
import DataFetching from './components/DataFetching.jsx'
import myContext from './components/context/UserContext.js'
import { BrowserRouter, Form, Route, Routes,Link } from 'react-router-dom'
import Practise from './components/practise/practise.jsx'










//!       23/11/25 (12:28 am) *********************************************************************************************************************

//*  props  -->  used to pass data from one component to another component
//*  props  -->  props is read only
//*  props  -->  props is an object
//*  props  -->  props can be used in functional as well as class component
//*  props  -->  props is used to pass data from parent component to child component



//! conditional rendering ******************************************************** self study *********************************************



function App() {
   let name= "akash"
   // let isLogin = true
   // console.log(useState())  
   // console.log(useState("akash"))     //usestate hook array milta hai 0 index undefine hai or 1st pr function
   // destruchering
   //const[name, steName] = useState('akash') //0th index
   // const [isLogin, setisLogin] = useState(true) // write a set in 2nd , first is a function
   const { isLogin, setisLogin } = useContext(myContext)
   let dashboardUserName = "akash"
   // function handleClick() {
   //    // setisLogin(isLogin+1)npm run dev
   //    //  setisLogin(!isLogin)
   //    //  console.log(isLogin)
   // }
   // problem :  normal react me variable update or change nhi kr skte that's why create a hook 
   //all hook are solve a problem
   return (
      
      <BrowserRouter>
         <>
            {/* write as because access for all element */}

            {/* all are childComponent and UserContextProvider is a Parent Component */}
            <div className="navbar">
               <img src={url} alt="error" className='logo' />
               <div className="menu-items">
                  {
                     navItem.map((item) => {
                        return <p key={item}>{item}</p>
                     })
                  }
               </div>
               <div className="btns">
                  {/* <bt className="btn">{props.isLogin? "logout":"login"} */}
                  <button className="btn" onClick={() =>
                     setisLogin(!isLogin)
                  }>{isLogin ? "logout" : "login"}
                  </button>
               </div>

            </div>

            <nav>
               <Link to="/">Home</Link> |{" "}
               <Link to="/profile">Profile</Link> |{" "}
               {/* <Link to="/contact">Contact</Link> */}
            </nav>

            {/* <h1> Conditional Rendering in React </h1> */}
            {/* importing navbar from Navbar.jsx */}
            {/* <Navbar text ={isLogin?'logout':'login'}/>      */}
            {/* <button className='btn' onClick={handleClick} >{isLogin?"logout":"login"}</button> */}
            {/* 
               {
                     isLogin?<Profile data={dashboardUserName} /> : <Login />
               }
       */}
            <Routes>
               <Route path='/' element={isLogin ? <Profile data={dashboardUserName} /> : <Login />} />
               <Route path='/profile' element={<Profile data={dashboardUserName} />} />
               <Route path='/login' element={<Login />} />
            </Routes>
            <Practise name="akash" gender='male' age='20'/>
            <h1>{name}</h1>
          

            {/* <Conditionalrendering/> */}
            {/* <Other/> */}
            {/* <UseEffectDemo /> */}
            {/* <DataFetching/> */}
            {/* <ReactForms/> */}
         </>
      </BrowserRouter>

   )
}
export default App

//you can import all files thast why you can write a logic in the app.jsx
//!  29/11/2025(Conditional rendering)
//* what is a condtion rendering 
//? Conditional rendering allows dynamic control over which UI elements or content are displayed based on specific conditions. It is commonly used in programming to show or hide elements depending on user input, data states, or system status. This technique improves user experience by ensuring that only relevant information is presented at a given time. It enables components to display different outputs depending on states or props. This ensures that the UI updates dynamically based on logic instead of manually manipulating the DOM.

//? codition ko use kr k  ham screen define krte hai


//!30/11/2025(useState)
//? agar kisi button pr click krne ke bad or globally update or change krna hai to use state khate hai use state padna baki hai
//? useState accepts an initial state and returns two values:
//?The current state.A function that updates the state.

//? The useState hook is a function that allows you to add state to a functional component. It is an alternative to the useReducer hook that is preferred when we require the basic update. useState Hooks are used to add the state variables in the components. For using the useState hook we have to import it in the component.

//*syntax
//* const [state, setState] = useState(initialState)

//? state: It is the value of the current state.
//? setState: It is the function that is used to update the state.
//? initialState: It is the initial value of the state.

//! 30/11/2025 (use effect)

//? The useEffect Hook allows you to perform side effects in your components.
//? Some examples of side effects are: fetching data, directly updating the DOM, and timers.

//? The useEffect hook is one of the most commonly used hooks in ReactJS, used to handle side effects in functional components. Before hooks, these kinds of tasks were only possible in class components through lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

// *syntax
//* useEffect(() => {
//     // Code to run on each render
//*     return () => {
//         // Cleanup function (optional)
//*    };
//* }, [dependencies]);

//? Fetching data from an API.
// ?Setting up event listeners or subscriptions.
//? Manipulating the DOM directly (although React generally handles DOM manipulation for you).
//? Cleaning up resources when a component unmounts.

//? [] = Dependencies array: React re-runs the effect if any of the values in this array change

//! api context (6/12/2025)
//?  he React Context API enables sharing data across components without manually passing props through every level, effectively eliminating prop drilling. It’s ideal for global state like themes, authentication, or user preferences.

//* How it works:

//? Create a Context using createContext().

//? Provide Data with the Provider component, wrapping the part of the tree that needs access.

//? Consume Data using the useContext() hook inside any descendant component.

//!props drilling
//? In React, prop drilling and the Context API are two approaches for managing and passing data between components. Each has its own use cases, advantages, and limitations.

//! Form (7/12/2025) (1:40)




//!  13/12/2025 (Coustom-hooks)(12:40)