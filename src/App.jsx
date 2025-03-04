import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSection from './components/home/FAQSection';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ServiceDetail from './components/shared/ServiceDetail';
import ServiceUse from './components/shared/ServiceUse';
import AllServices from './components/home/AllServices';

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
        
        {/* Trang tất cả dịch vụ */}
        <Route path="/services" element={
          <MainLayout>
            <AllServices />
          </MainLayout>
        } />
        
        {/* Trang chi tiết dịch vụ */}
        <Route path="/service/:id" element={
          <MainLayout>
            <ServiceDetail />
          </MainLayout>
        } />
        
        {/* Trang sử dụng dịch vụ */}
        <Route path="/service/:id/use" element={
          <MainLayout>
            <ServiceUse />
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