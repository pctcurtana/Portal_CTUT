import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import AdminLayout from './components/layout/AdminLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSection from './components/home/FAQSection';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ServiceDetail from './components/services/ServiceDetail';
import ServiceUse from './components/services/ServiceUse';
import AllServices from './components/services/AllServices';
import ServiceHistory from './components/services/ServiceHistory';
import NewsSection from './components/home/NotifySection';
import AllFAQ from './components/faq/AllFAQ';
import Test from './components/home/Test';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminServices from './components/admin/AdminServices';
import AdminUsers from './components/admin/AdminUsers';
import AdminNotifications from './components/admin/AdminNotifications';
import AdminSettings from './components/admin/AdminSettings';
import { QueryClientProvider } from '@tanstack/react-query';
import QueryProvider from './QueryProvider';
function App() {
  return (
    <QueryProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <HeroSection />
              <div className="container mx-auto px-4 py-6">
                {/* <Test /> */}
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
          
          <Route path="/faq" element={
            <MainLayout>
              <AllFAQ />
            </MainLayout>
          } />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          } />
          
          <Route path="/admin/services" element={
            <AdminLayout>
              <AdminServices />
            </AdminLayout>
          } />
          
          <Route path="/admin/users" element={
            <AdminLayout>
              <AdminUsers />
            </AdminLayout>
          } />
          
          <Route path="/admin/notifications" element={
            <AdminLayout>
              <AdminNotifications />
            </AdminLayout>
          } />
          
          <Route path="/admin/settings" element={
            <AdminLayout>
              <AdminSettings />
            </AdminLayout>
          } />
        </Routes>
      </Router>
    </QueryProvider>
  );
}

export default App;