import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../shared/ServiceCard';
import { services } from '../../constants/data';
import { Button } from '../shared/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const popularServices = services.filter(service => service.popular);

  return (
    <section id="services" className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:text-left">
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
            Dịch vụ phổ biến
          </h2>
          <div className="w-61 h-1 bg-yellow-400 mx-auto md:mx-0 mt-1"></div>
        </div>

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

        <div className="text-center mt-12">
          <Link to="/services"           
          className="inline-flex items-center px-6 py-3 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors"
          >
              Xem tất cả dịch vụ
              <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;