import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  const { id, title, icon, desc, popular } = service;
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-[rgb(36,67,128)] group transform hover:-translate-y-1 relative">
      <div className="text-[rgb(36,67,128)] mb-4 bg-blue-50 p-3 rounded-full inline-block group-hover:bg-[rgb(36,67,128)] group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-[rgb(36,67,128)]">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <Link 
        to={`/service/${id}`}
        className="inline-flex items-center text-[rgb(36,67,128)] hover:text-[rgb(56,92,165)] font-medium group-hover:font-semibold"
      >
        Truy cập
        <ArrowRightIcon className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
      {popular && (
        <span className="absolute top-4 right-4 bg-yellow-500 text-xs text-white px-2 py-1 rounded-full">
          Phổ biến
        </span>
      )}
    </div>
  );
};