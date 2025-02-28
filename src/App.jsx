import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import StatisticsSection from './components/home/StatisticsSection';
import FAQSection from './components/home/FAQSection';
import CTASection from './components/home/CTASection';
import { useScroll } from './hooks/useScroll';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const isScrolled = useScroll(10); // Theo dõi scroll với threshold 10px

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Tìm kiếm:', searchQuery);
  };

  return (
    <MainLayout isScrolled={isScrolled}>
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <div className="container mx-auto px-12 py-12">
        <ServicesSection />
        {/* <StatisticsSection /> */}
        <FAQSection />
        {/* <CTASection /> */}
      </div>
    </MainLayout>
  );
}

export default App;