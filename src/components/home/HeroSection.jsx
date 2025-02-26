import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';

const HeroSection = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <section className="relative min-h-[600px] bg-[rgb(36,67,128)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(36,67,128)]/50 to-[rgb(36,67,128)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-12 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cổng Dịch vụ Công
            <span className="block text-yellow-400">Trực tuyến</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Giải quyết thủ tục hành chính nhanh chóng, thuận tiện và hiệu quả
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm dịch vụ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
                />
                <MagnifyingGlassIcon className="h-6 w-6 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <Button 
                type="submit" 
                variant="secondary" 
                className="!px-8 !py-4 shadow-lg hover:shadow-xl rounded"
              >
                Tìm kiếm
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                number: '50+', 
                label: 'Dịch vụ trực tuyến',
                description: 'Đa dạng dịch vụ' 
              },
              { 
                number: '24/7', 
                label: 'Hỗ trợ liên tục',
                description: 'Luôn sẵn sàng phục vụ' 
              },
              { 
                number: '15k+', 
                label: 'Người dùng',
                description: 'Tin tưởng sử dụng' 
              },
              { 
                number: '100%', 
                label: 'Bảo mật',
                description: 'An toàn thông tin' 
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 30L48 35C96 40 192 50 288 55C384 60 480 60 576 55C672 50 768 40 864 45C960 50 1056 70 1152 75C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V30Z" 
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;