import React, { useState } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import SimpleSlider from './components/slider';
import AuthForm from './components/authorization';

import './App.css';
 
function App() {

  return (
    <div className="container">
      <NavBar />
      <div className='bg-img'>
      <AuthForm />
      </div>
      <SimpleSlider />
      <Footer />
    </div>
  );
}

export default App;
