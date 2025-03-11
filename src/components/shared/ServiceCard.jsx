import React from 'react';
import { ArrowRightIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  const { id, title, icon, desc, popular, steps, processingTime } = service;
    
  return (
    <Link to={`/service/${id}`}>
      <div className="bg-[rgb(36,67,128)]/10 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-10 border-[rgb(36,67,128)] group transform hover:-translate-y-1 relative">
        <div className='flex'>
          <div className="text-[rgb(36,67,128)] bg-blue-50 p-3 rounded-full inline-flex items-center justify-center h-12 w-12 flex-shrink-0 group-hover:bg-[rgb(36,67,128)] group-hover:text-white transition-colors">
            {icon}
          </div>
          <div className='m-3 flex-grow'>
            <h3 className="font-semibold text-lg text-[rgb(36,67,128)]">{title}</h3>
          </div>
        </div>
        <p className="text-gray-900 my-4">{desc}</p>
        
        {/* Thông tin về dịch vụ */}
        <div className="flex flex-col space-y-2 mt-2 mb-1">
          {/* Số lượng quy trình */}
          <div className="flex items-center text-sm text-gray-700">
            <ClipboardDocumentListIcon className="h-4 w-4 mr-1 text-[rgb(36,67,128)]" />
            <span>{steps} quy trình thực hiện</span>
          </div>
          
          {/* Thời gian xử lý */}
          <div className="flex items-center text-sm text-gray-700">
            <ClockIcon className="h-4 w-4 mr-1 text-[rgb(36,67,128)]" />
            <span>Thời gian xử lý: {processingTime}</span>
          </div>
        </div>
        {popular && (
          <span className="absolute top-2 right-4 bg-yellow-500 text-xs text-white px-2 py-1 rounded-full">
            Phổ biến
          </span>
        )}
      </div>
    </Link>
  );
};