import React from 'react';
import './App.css';
import { Navbar, Prompt } from './components';


function App() {

  return (
    <>
      <div className='bg-[#1F1F23] font-spaceMono h-[100vh]'>
        <Navbar />
        <Prompt />
      </div>
    </>
  )
}

export default App;
