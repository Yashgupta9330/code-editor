
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components from react-router-dom
import './App.css';
import Home from './components/Home';
import OutputEditor from './components/outputeditor';

function App() {

    
    const [data,setData]=useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home  setData={setData}/>} /> 
        <Route path="/:username" element={<OutputEditor  data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
