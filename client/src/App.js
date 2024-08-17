import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Core from './pages/core';
import Navbar from './components/Navbar';
import AddFeatures from './pages/features';

export const currentContext = createContext();

function App() {
  const [data, setData] = useState("")
  document.body.style = 'background: #000000;';
  return (
    <currentContext.Provider value={{ data, setData }}>
      <Router>
      <Navbar/>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/core" element={<Core/>} />
          <Route path="/features" element={<AddFeatures/>} />
        </Routes>
      </Router>
    </currentContext.Provider>
  );
}

export default App;
