import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import Core from './pages/core';
import Navbar from './components/Navbar';
import AddFeatures from './pages/features';
import Platforms from './pages/platforms';
import Generate from './pages/generate';
import List from './pages/list';
import InfoPage from './pages/infopage';

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
          <Route path="/platforms" element={<Platforms/>} />
          <Route path="/generate" element={<Generate/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/info/:index" element={<InfoPage/>} />
        </Routes>
      </Router>
    </currentContext.Provider>
  );
}

export default App;
