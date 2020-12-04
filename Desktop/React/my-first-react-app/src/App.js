import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state={
    persons:[
      {name:'Yash',age:23,key:"sjajdkla"},
      {name:'Teju',age:21,key:"kslajir"},
      {name:'shu',age:23,key:"kdkjdsi"}
    ],
    showPersons:false
  }

  deleteHandler=(personIndex)=>{
    const persons=this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  TogglePersonsHandler=()=>{
    let currentShow=this.state.showPersons;
    this.setState({
      showPersons:!currentShow
    })
  }

  nameChangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex((person)=>{
      return person.key===id;
    })
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})
  }

  render() {
   const style={
     backgroundColor:'green',
     color:'white',
     font:'inherit',
     border:'1px solid blue',
     padding:'8px',
     cursor:'pointer',
     ':hover':{
       backgroundColor:'lightgreen'
     }
   };

    let persons=null;
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person change={(event)=> this.nameChangeHandler(event,person.key)} delete={this.deleteHandler.bind(this,index)} name={person.name} age={person.age} key={person.key}/>
          })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'orange'
      }
    };
    const property=[];
    if(this.state.persons.length<=2){
      property.push('red');
    }
    if(this.state.persons.length<=1){
      property.push('bold');
    }

    return (
      <div className="App">
        <p className={property.join(' ')}>Hi this is my first react app</p>
        <button style={style} onClick={this.TogglePersonsHandler}>switch names</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
