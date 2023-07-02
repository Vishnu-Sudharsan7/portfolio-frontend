import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Final from './Components/comp_port/final';
import Login from './Components/login/Login';
import "./App.css"

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/port" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
