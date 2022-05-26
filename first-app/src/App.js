import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var person={
    name: 'MD Shakil Khan',
    job: 'Programmer'
  };
  var style={
    color: 'cyan',
    backgroundColor: 'black',
    padding: '10px'
  }

  var persons=[
    {
      name: 'Shakil',
      job: 'Programmer'
    },
    {
      name: 'Tony Stark',
      job: 'Ironman'
    },
    {
      name: 'Thor',
      job: 'Thunder'
    }
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <p style={style}>{person.name +' is a '+ person.job}</p> */}
        <Counter></Counter>
        <Users></Users>
        {
          persons.map(person => <Person person={person}></Person>)
        }
      </header>
    </div>
  );
}

function Person(props){
  const personStyle={
    color: 'red'
  }
  const personCardStyle={
    border: '1px solid cyan',
    padding: '10px',
    margin: '10px'
  }
  return(
    <div style={personCardStyle}>
      <h2 style={personStyle}>Name: {props.person.name}</h2>
      <h3>Job: {props.person.job}</h3>
    </div>
  )
}

function Counter(){
  const [count, setcount] = useState(10);
  
  const decreaseHandler = () => {
    setcount(count-1);
  }

  const increaseHandler = () => {
    setcount(count+1);
  }
  
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setusers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setusers(data));
  })

  return(
    <div>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}

export default App;

