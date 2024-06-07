import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Notfound from './components/Notfound';
import Track from './components/Track';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track" element={<Track />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/nav-bar" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
