import React from 'react'


const Practise = (props) => {
    console.log(props);
  return (
    <div>
        <h2>
            my name is {props.name}
        </h2>
        <h1>my name is {props.name} my gender is {props.gender} and age is {props.age}</h1>
        <h1>{props.age}</h1>
    </div>
  )
}

export default Practise