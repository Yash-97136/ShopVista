import React from 'react';
import './Person.css'

const person = (props)=>{
    return (
        <div className="Person">
            <p onClick={props.delete}>Hey i am {props.name} here and my age is {props.age} {props.children}.</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )}

export default person;