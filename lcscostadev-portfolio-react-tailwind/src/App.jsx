import React from 'react';
import './App.css';
import { Navbar, Prompt, Hero, About } from './components';


function App() {

  return (
    <>
      <div className='font-spaceMono bg-[#1F1F23]'>
        <Navbar />
        <Hero />
        <About />
        <Prompt />
      </div>
    </>
  )
}

export default App;
