import React from 'react'
import UserDashboard from './UserDashboard'
import { useContext } from 'react'
import myContext from './context/UserContext'

// const Profile = (props) => {                 data passing     app.jsx --> profile --> userdashboard  that's is called as props drelling
    const Profile = ({data}) => {
        let {userData}=useContext(myContext)
        console.log(userData)
    return (
        <div className='Profile'>   
            <h1>welcome {userData.firstname} {userData.Lastname}  User Email is {userData.Email} to profile page</h1>
            <p></p>
            <p></p>
            {/* <h2>{props.data}</h2> */}
            {/* <UserDashboard name= {data}/> */}
        </div>
    )
}

export default Profile