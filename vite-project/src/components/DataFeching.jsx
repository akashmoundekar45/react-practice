import React, { useState } from 'react'

function DataFeching() {

let apiURL='https://official-joke-api.appspot.com/jokes/random'

const [data,setData]= useState({})
async function fetchData(){
    let response = await fetch(apiURL)
    let result = await response.json()
    setData(result)
}
         useEffect (()=>{
            fetchData()       // jbhi page refresh honga to auto matically feach ho jayega
         },[])  

  return (
    <div className='joke'>
        <h2>Api featching</h2>
        <h3 style={{display:"flex", justifyContent:"space-around"}}>{data.id}Type:{data.type}</h3>
        <h4>setup:{data.setup}</h4>
        <h3>punchline:{data.punchline}</h3>
        <button className="btn" onClick={fetchData}> new joke</button>
    </div>
  )
}

export default DataFeching;