import React, { useState } from 'react';
import { ServiceCard } from '../shared/ServiceCard';
import { services } from '../../constants/data';
import { Button } from '../shared/Button';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'Tất cả' },
    { id: 'popular', label: 'Phổ biến' },
    { id: 'academic', label: 'Học vụ' },
    { id: 'document', label: 'Văn bằng' },
    { id: 'financial', label: 'Tài chính' }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : activeTab === 'popular'
      ? services.filter(service => service.popular)
      : services.filter(service => service.category === activeTab);

  return (
    <section className="pb-12 px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)] mb-4 relative">
            Dịch vụ trực tuyến
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Các dịch vụ hành chính được cung cấp trực tuyến, giúp sinh viên và cán bộ thực hiện các thủ tục một cách thuận tiện
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[rgb(36,67,128)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service}
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          icon 
          className="!px-8 !py-3 text-lg rounded"
        >
          Xem tất cả dịch vụ
        </Button>
      </div>
    </section>
  );
};

export default ServicesSection;