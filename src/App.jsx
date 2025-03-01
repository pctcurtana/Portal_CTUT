import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSection from './components/home/FAQSection';
import Login from './components/auth/Login';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={
          <MainLayout>
            <HeroSection />
            <div className="container mx-auto px-12 py-12">
              <ServicesSection />
              <FAQSection />
            </div>
          </MainLayout>
        } />
        
        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
