import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSection from './components/home/FAQSection';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ServiceDetail from './components/services/ServiceDetail';
import ServiceUse from './components/services/ServiceUse';
import AllServices from './components/services/AllServices';
import ServiceHistory from './components/services/ServiceHistory';
import NewsSection from './components/home/NewsSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HeroSection />
            <div className="container mx-auto px-4 py-6">
              <ServicesSection />
              <NewsSection />
              <FAQSection />
            </div>
          </MainLayout>
        } />
        
        <Route path="/services" element={
          <MainLayout>
            <AllServices />
          </MainLayout>
        } />
        
        <Route path="/service/:id" element={
          <MainLayout>
            <ServiceDetail />
          </MainLayout>
        } />
        
        <Route path="/service/:id/use" element={
          <MainLayout>
            <ServiceUse />
          </MainLayout>
        } />
        <Route path="/service-history" element={
          <MainLayout>
            <ServiceHistory />
          </MainLayout>
        } />
        
        
        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login/>} />
        {/* Trang đăng ký */}
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;