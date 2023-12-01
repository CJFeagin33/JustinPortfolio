import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/homepage'
import ContactPage from './pages/contactPage'
import AboutMePage from './pages/aboutMePage'
import React, { useState } from 'react';
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/contactMe" element={<ContactPage />}/>
          <Route path="/aboutMe" element={<AboutMePage />}/>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
