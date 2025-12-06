import React from 'react'
import { navItem, url } from '../data'


// const Navbar = () => {
//     console.log(navItems,url)

//     return(
//        <div className="navbar">
//           <img src={url} className='logo'/>
//           <div className="menu-items">
//             {
//                navItems.map((item)=>{
//                   return<p>{item}</p>
//                })
//             }
//           </div>
//        </div>
//     )

// }
// export default Navbar //? only one file are export because of default 
//? but you want to export multiple file then use export const


// function navbar() {
//     return (
//         <div className="container">
//             <div className="list">
//               <div className="logo">
//                 <ul className="section">
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Services</li>
//                     <li>Contact Us</li>
//                     <li>Blog</li>
//                     <li>courses</li>
//                 </ul>
//             </div>
//         </div>
//      </div>
//     )
// }

//! remaing date 22/11/25 or 23/11/25 (conditional rendering and react props)

//! 29/11/2025
//react are solve state managment problem 

const Navbar = (props) => {
   console.log(navItem)
   return (
      <div className="navbar">
         <img src={url} alt="error" className='logo' />
         <div className="menu-items">
            {
               navItem.map((item) => {
                  return <p>{item}</p>
               })
            }
         </div>
            <div className="btns">
               {/* <bt className="btn">{props.isLogin? "logout":"login"} */}
               <bt className="btn">{props.text}
               </bt>
            </div>

      </div>
   )
}
export default Navbar // only one file can export but export word are write on the front then export multiple file 

// todo difference between block element and inline element
//? A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
//? A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
//? example of block element : <p></p>, <div> </div>,
//?Here are the block-level elements in HTML:

//<address>
// <article>
// <aside>
// <blockquote
// ><canvas>
// <dd>
// <div>
// <dl>
//?  <dt>,<fieldset>,<figcaption>, <figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video> </video>

// todo Inline Elements
//? An inline element does not start on a new line.
//? An inline element only takes up as much width as necessary.
// ?This is a <span> element inside a paragraph.
//?Here are the inline elements in HTML:
//*<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var></var>