import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../shared/ServiceCard';
import { services } from '../../constants/data';
import { Button } from '../shared/Button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const popularServices = services.filter(service => service.popular);

  return (
    <section id="services" className="py-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:text-left">
          <div className='flex flex-col '>
            <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
              <div className='h-6.5 w-1.5 bg-yellow-400 mt-3 inline-block mr-2'></div>
              Dịch vụ phổ biến
            </h2>
            <span className="w-full bg-gray-200 h-px mx-auto md:mx-0 mt-1"></span>
          </div
         >
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
          className="inline-flex items-center px-5 py-2 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors"
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