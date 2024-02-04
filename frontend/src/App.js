import React, {useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [userName, setUsername]= useState('')

  useEffect(() =>{
    getNames();

  }, [])
  const getNames = async() =>{
    const respone = await axios.get('/name')
    console.log(respone)
    setUsername(respone.data)
  }
  return (
    <><h1>My Frontend</h1>
    <h3>my name is {userName} </h3></>

  );
}

export default App;
