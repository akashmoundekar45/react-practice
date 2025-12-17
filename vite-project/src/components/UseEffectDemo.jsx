//! 30 nov

import React, { useEffect, useState } from 'react'

//useEffect(<function>, <dependency>)
// useEffect(()=>{
//function
// } ,[])


const UseEffectDemo = () => {

    const [X,setX]= useState(0)
    const [Y,setY]= useState(0)
    const [A,setA]= useState(2)
    // function hello() {
    //     console.log("this is UseEffect")
    // }
    // useEffect(hello)
    useEffect(()=>{
              console.log("this is UseEffect") 
    },[X,Y])//its a dependancy array. thats  only run in one time use empty dependancy
            //when dependancy array can run for specific task
    return (
        <div>
            <h1>
                useEffect
            </h1>
            <h3>X value:{X}</h3>
             <h3>Y value:{Y}</h3>
             <h3>A value:{A}</h3>
            <button className='btn' onClick={()=>setX(X+1)}>Inc X</button>
            <button className='btn'onClick={()=>setY(Y+1)}>Inc Y</button>
              <button className='btn'onClick={()=>setA(A*2)}>Inc A</button>
        </div>
    )
}

export default UseEffectDemo