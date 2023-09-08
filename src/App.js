/* eslint-disable no-unused-vars */
import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [num, setNum] = useState("");
  return (
    <>
    
<Task />

   
    </>
  );
}

export default App;
