import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p>Name: {props.name} </p>
        <p>age: {props.age} </p>
        <p>this person: {props.IsMarried ? "is Married" : "is single"} </p>
    </div>
  )
}

export default Person