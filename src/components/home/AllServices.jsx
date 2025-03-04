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
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setActiveCategory('all');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
        <span className="mx-2">/</span>
        <span className="text-[rgb(36,67,128)] font-medium">Tất cả dịch vụ</span>
      </div>

      <h1 className="text-3xl font-bold text-[rgb(36,67,128)] mb-8 relative">
        Tất cả dịch vụ
        <span className="absolute left-0 -bottom-2 w-20 h-1 bg-yellow-400"></span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
            <h2 className="font-semibold text-lg text-[rgb(36,67,128)] mb-4">Danh mục</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-[rgb(36,67,128)] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
            
            {(searchTerm || activeCategory !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="w-full mt-6 px-3 py-2 text-[rgb(36,67,128)] border border-[rgb(36,67,128)] rounded-lg hover:bg-[rgb(36,67,128)] hover:text-white transition-colors text-sm font-medium"
              >
                Xóa tất cả bộ lọc
              </button>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Search and filter bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
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
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                Bộ lọc
              </button>
            </div>
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden bg-white rounded-xl shadow-md p-4 mb-6">
              <h2 className="font-semibold text-lg text-[rgb(36,67,128)] mb-4">Danh mục</h2>
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

          {/* Thông báo khi có tìm kiếm */}
          {searchTerm && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-700">
                Kết quả tìm kiếm cho <span className="font-medium">"{searchTerm}"</span>: 
                {filteredServices.length > 0 
                  ? ` Tìm thấy ${filteredServices.length} dịch vụ` 
                  : ' Không tìm thấy dịch vụ nào'}
              </p>
            </div>
          )}

          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Hiển thị <span className="font-medium">{filteredServices.length}</span> dịch vụ
            </p>
          </div>

          {/* Services grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard 
                  key={service.id || index} 
                  service={service}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <p className="text-gray-600 mb-4">Không tìm thấy dịch vụ nào phù hợp với tiêu chí tìm kiếm.</p>
              <button
                onClick={clearAllFilters}
                className="text-[rgb(36,67,128)] hover:underline font-medium"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;