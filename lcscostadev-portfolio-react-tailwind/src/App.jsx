import React from 'react';
import './App.css';
import { Navbar, Prompt, Hero } from './components';


function App() {

  return (
    <>
      <div className='font-spaceMono bg-[#1F1F23]'>
        <Navbar />
        <Hero />
        <Prompt className="h-[100vh]" />
        <Prompt className="h-[100vh]" />
        <Prompt className="h-[100vh]" />
      </div>
    </>
  )
}

export default App;
