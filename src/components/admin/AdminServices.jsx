import React, { useState } from 'react';
import { services } from '../../constants/data';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const AdminServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'academic', label: 'Học vụ' },
    { id: 'document', label: 'Văn bằng' },
    { id: 'financial', label: 'Tài chính' },
    { id: 'facility', label: 'Cơ sở vật chất' }
  ];

  const filterServices = () => {
    let result = [...services];
    
    if (activeCategory !== 'all') {
      result = result.filter(service => service.category === activeCategory);
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

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.label : category;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'financial':
        return 'bg-green-100 text-green-800';
      case 'document':
        return 'bg-purple-100 text-purple-800';
      case 'facility':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setShowAddModal(true);
  };

  const handleDelete = (serviceId) => {
    if (confirm('Bạn có chắc chắn muốn xóa dịch vụ này không?')) {
      // Xử lý xóa dịch vụ
      console.log('Xóa dịch vụ:', serviceId);
    }
  };

  const ServiceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[rgb(36,67,128)]">
            {editingService ? 'Chỉnh sửa dịch vụ' : 'Thêm dịch vụ mới'}
          </h3>
          <button
            onClick={() => {
              setShowAddModal(false);
              setEditingService(null);
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên dịch vụ</label>
            <input
              type="text"
              defaultValue={editingService?.title || ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              placeholder="Nhập tên dịch vụ"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <textarea
              defaultValue={editingService?.desc || ''}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              placeholder="Nhập mô tả dịch vụ"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select
              defaultValue={editingService?.category || 'academic'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
            >
              {categories.slice(1).map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Số bước</label>
              <input
                type="number"
                defaultValue={editingService?.steps || 1}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian xử lý</label>
              <input
                type="text"
                defaultValue={editingService?.processingTime || ''}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
                placeholder="VD: 1-2 ngày"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="popular"
              defaultChecked={editingService?.popular || false}
              className="h-4 w-4 text-[rgb(36,67,128)] focus:ring-[rgb(36,67,128)] border-gray-300 rounded"
            />
            <label htmlFor="popular" className="ml-2 block text-sm text-gray-900">
              Dịch vụ phổ biến
            </label>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[rgb(36,67,128)] hover:bg-[rgb(56,92,165)] text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {editingService ? 'Cập nhật' : 'Thêm mới'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowAddModal(false);
                setEditingService(null);
              }}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[rgb(36,67,128)]">Quản lý dịch vụ</h2>
          <p className="text-gray-600 mt-1">Quản lý tất cả dịch vụ trong hệ thống</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[rgb(36,67,128)] hover:bg-[rgb(56,92,165)] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Thêm dịch vụ</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2"/>
            Bộ lọc
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)} 
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
          </div>
        )}
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Danh sách dịch vụ ({filteredServices.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dịch vụ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Danh mục
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thời gian xử lý
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{service.title}</div>
                        <div className="text-sm text-gray-500">{service.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(service.category)}`}>
                      {getCategoryLabel(service.category)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {service.processingTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-900">Hoạt động</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleEdit(service)}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showAddModal && <ServiceModal />}
    </div>
  );
};

export default AdminServices; 