import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    let apiURL= 'https://sv443.net/jokeapi/v2/joke/Programming'

     const [Data ,setData]=useState({})
    // inbuild feature in react that is featch
     async function fetchData(){
               let responce =  await fetch(apiURL) //in the promise by default agar resolve or reject nhi hai to pending hota hai

               //! api are coverting in json format 
               let result = await responce.json()
            //    console.log(result) //agar resolve krna honga to hum asyn ka use krenge 
            setData(result)
    }
useEffect(()=>{  // useeffect use: jbhi bhi page refresh hota hai to automatically useeffect call ho jata hai. kuch bhi page update huva to vo useEffect k karan hi honga
    fetchData() 
},[])

  return (
    <div className='joke'>
        <h2>
            this is data featching
        </h2>
        <h3>joke id:{Data.id}</h3>
        <h3 style={{display:'flex', justifyContent:'space-around'}}><span>type : {Data.type}</span></h3>
        <h3>category:{Data.category}</h3>
          <h3>setup:{Data.setup}</h3>
    </div>
  )
}

export default DataFetching