import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../shared/ServiceCard';
import { services } from '../../constants/data';
import { Button } from '../shared/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
  // Lọc ra các dịch vụ phổ biến
  const popularServices = services.filter(service => service.popular);

  return (
    <section id="services" className="pb-12 px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)] mb-4 relative">
            Dịch vụ phổ biến
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-yellow-400"></span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Các dịch vụ được sử dụng thường xuyên và được nhiều người tin dùng
          </p>
        </div>
      </div>

      {/* Grid hiển thị dịch vụ phổ biến */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {popularServices.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service}
            className="animate-fadeIn"
            style={{ animationDelay: `${service.id * 0.1}s` }}
          />
        ))}
      </div>

      {/* Nút xem tất cả dịch vụ */}
      <div className="text-center mt-12">
        <Link to="/services">
          <Button 
            variant="outline" 
            className="!px-8 !py-3 text-lg rounded group"
          >
            Xem tất cả dịch vụ
            <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;