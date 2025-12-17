import React from 'react'

//! conditional rendering ********************************************************self study*********************************************
// export default function Conditionalrendering() {
//     let userLogin = false;
//     return (
//         <div>
//             <h2 className='heading'>
//                 Conditional Rendering in React
//             </h2>

//             <button>
//                 {userLogin ? "Profile" : "Login"}
//             </button>
//             {
//                 userLogin?
//                     <div>
//                         <h2> hello world</h2> // if userLogin is true then this block will execute
//                     </div> :

//                     <div>
//                         <h2> please login</h2>
//                     </div>
//             }
//         </div>
//     )
// }

//?  create a Component on conditional rendering
//* if the user is given then display hello username else display anonymous user

export default function Conditionalrendering() {
    let username="pankaj";
    return(
        <div>
            {
                username ?
                 <h2> Hello, {username} </h2> :
                  <h3> Anonymous User </h3>
            }
        </div>      

    )
}
       
//* export default condtionalrendering