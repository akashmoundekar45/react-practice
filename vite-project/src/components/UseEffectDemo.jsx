import React,{useEffect,useState} from "react";

const UserEffectDemo = () =>{
    const[X, setX]= useState(0)
    const[Y, setY]= useState(0)
    useEffect(()=>{
        console.log("hello");
    },[X])
    return(
        <div>
            <h1>data page</h1>
            <h1>X:{X}</h1>
            <h1>Y:{Y}</h1>
            
            <button className="btn" onClick={()=> setX(X+1)}> inc X</button>
             <button className="btn" onClick={()=> setY(Y-1)}> inc Y</button>
             {/* <button className=" btn" onClick={()=>setX(X-1)}> dec X</button> */}
        </div>
    )
}
export default UserEffectDemo