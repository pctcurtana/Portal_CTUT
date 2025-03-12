import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../../constants/data';
import { ServiceCard } from '../shared/ServiceCard';
import { 
  MagnifyingGlassIcon, 
  AdjustmentsHorizontalIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const AllServices = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchFromUrl = searchParams.get('search') || '';
  
  const [searchTerm, setSearchTerm] = useState(searchFromUrl);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'academic', label: 'Học vụ' },
    { id: 'document', label: 'Văn bằng' },
    { id: 'financial', label: 'Tài chính' },
    { id: 'facility', label: 'Cơ sở vật chất' },
    { id: 'popular', label: 'Phổ biến' }
  ];
  const totalServices = 8;

  const filterServices = () => {
    let result = [...services];
    
    if (activeCategory !== 'all') {
      if (activeCategory === 'popular') {
        result = result.filter(service => service.popular);
      } else {
        result = result.filter(service => service.category === activeCategory);
      }
    }
    
    if (searchTerm) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter(service => 
        service.title.toLowerCase().includes(term) || 
        service.desc.toLowerCase().includes(term)
      );
    }
    
    return result;
  };

  const filteredServices = filterServices();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  return (
    <div className="container mx-auto px-4 pt-2 pb-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
        <span className="mx-2">/</span>
        <span className="text-[rgb(36,67,128)] font-medium">Tất cả dịch vụ</span>
      </div>

      <div className="text-left mb-2">
        <div className='flex flex-col'>
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
            <div className='h-6.5 w-1.5 bg-yellow-400 mt-3 inline-block mr-2'></div>
            Tất cả dịch vụ
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Search and filter bar */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm dịch vụ..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
            >
              <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Bộ lọc
            </button>
          </div>

          {/* Filter categories */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)} 
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[rgb(36,67,128)] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              
              {(searchTerm || activeCategory !== 'all') && (
                <button
                  onClick={clearAllFilters}
                  className="w-full mt-4 px-3 py-2 text-[rgb(36,67,128)] border border-[rgb(36,67,128)] rounded-lg hover:bg-[rgb(36,67,128)] hover:text-white transition-colors text-sm font-medium"
                >
                  Xóa tất cả bộ lọc
                </button>
              )}
            </div>
          )}
        </div>

        {/* Search results info */}
        {searchTerm && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-blue-700">
              Kết quả tìm kiếm cho <span className="font-medium">"{searchTerm}"</span>: 
              {filteredServices.length > 0 
                ? ` Tìm thấy ${filteredServices.length} dịch vụ` 
                : ' Không tìm thấy dịch vụ nào'}
            </p>
          </div>
        )}

        {/* Results count */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Hiển thị <span className="font-medium">{filteredServices.length}</span> trong tổng số 
            <span className="font-medium"> {totalServices}</span> dịch vụ
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;