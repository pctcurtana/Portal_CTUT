import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const stats = [
    { number: '50+', label: 'Dịch vụ trực tuyến', description: 'Đa dạng dịch vụ' },
    { number: '24/7', label: 'Hỗ trợ liên tục', description: 'Luôn sẵn sàng phục vụ' },
    { number: '15k+', label: 'Người dùng', description: 'Tin tưởng sử dụng' },
    { number: '100%', label: 'Bảo mật', description: 'An toàn thông tin' }
  ];

  return (
    <section className="relative min-h-[600px] pb-4 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[#244380]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244380] via-[#0f4583] to-blue-500 opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-4 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl select-none cursor-pointer md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cổng Dịch Vụ Công
            <span className="block text-yellow-400">Trực Tuyến</span>
          </h1>
          
          <p className="text-xl text-white mb-12 leading-relaxed">
            Giải quyết thủ tục hành chính nhanh chóng, thuận tiện và hiệu quả
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm dịch vụ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 md:px-6 md:py-4 shadow-xl"
                />
              </div>
              <Button 
                type="submit" 
                variant="login"  
                className="shadow-lg px-3 text-sm py-3 md:text-base md:px-5 md:py-4"
              >
                <MagnifyingGlassIcon className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 ">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 180" 
          preserveAspectRatio="none" 
          className="block w-full h-[80px]"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;