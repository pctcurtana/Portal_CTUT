import React, { useState } from 'react';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  BellIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const AdminNotifications = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingNotification, setEditingNotification] = useState(null);

  const mockNotifications = [
    {
      id: 1,
      title: 'Bảo trì hệ thống',
      content: 'Hệ thống sẽ được bảo trì từ 22:00 ngày 15/01 đến 02:00 ngày 16/01. Trong thời gian này, một số dịch vụ có thể bị gián đoạn.',
      type: 'warning',
      status: 'active',
      targetUsers: 'all',
      createdAt: '2024-01-15',
      createdBy: 'Admin',
      views: 1247
    },
    {
      id: 2,
      title: 'Cập nhật tính năng mới',
      content: 'Chúng tôi đã cập nhật tính năng đăng ký học phần với giao diện mới, dễ sử dụng hơn.',
      type: 'info',
      status: 'active',
      targetUsers: 'students',
      createdAt: '2024-01-12',
      createdBy: 'Admin',
      views: 2341
    },
    {
      id: 3,
      title: 'Thông báo nghỉ lễ',
      content: 'Trường sẽ nghỉ lễ Tết Nguyên Đán từ ngày 10/02 đến 17/02. Tất cả dịch vụ sẽ tạm dừng trong thời gian này.',
      type: 'success',
      status: 'scheduled',
      targetUsers: 'all',
      createdAt: '2024-01-10',
      createdBy: 'Admin',
      views: 856
    },
    {
      id: 4,
      title: 'Cảnh báo bảo mật',
      content: 'Phát hiện một số truy cập bất thường. Vui lòng thay đổi mật khẩu và kích hoạt xác thực 2 yếu tố.',
      type: 'error',
      status: 'inactive',
      targetUsers: 'all',
      createdAt: '2024-01-08',
      createdBy: 'Security Team',
      views: 3421
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTargetLabel = (target) => {
    switch (target) {
      case 'all':
        return 'Tất cả';
      case 'students':
        return 'Sinh viên';
      case 'staff':
        return 'Nhân viên';
      default:
        return target;
    }
  };

  const handleEdit = (notification) => {
    setEditingNotification(notification);
    setShowAddModal(true);
  };

  const handleDelete = (notificationId) => {
    if (confirm('Bạn có chắc chắn muốn xóa thông báo này không?')) {
      console.log('Xóa thông báo:', notificationId);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-[rgb(36,67,128)]">Quản lý thông báo</h2>
          <p className="text-gray-600 mt-1">Tạo và quản lý thông báo gửi đến người dùng</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-[rgb(36,67,128)] hover:bg-[rgb(56,92,165)] text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Tạo thông báo</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tổng thông báo</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
            </div>
            <BellIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Đang hoạt động</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">18</p>
            </div>
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Đã lên lịch</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            </div>
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Không hoạt động</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            </div>
            <XCircleIcon className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Danh sách thông báo ({mockNotifications.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thông báo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loại
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Đối tượng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lượt xem
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockNotifications.map((notification) => (
                <tr key={notification.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {getTypeIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {notification.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {notification.content}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Tạo bởi {notification.createdBy} • {new Date(notification.createdAt).toLocaleDateString('vi-VN')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(notification.type)}`}>
                      {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {getTargetLabel(notification.targetUsers)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(notification.status)}`}>
                      {notification.status === 'active' ? 'Hoạt động' : 
                       notification.status === 'scheduled' ? 'Đã lên lịch' : 'Không hoạt động'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {notification.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleEdit(notification)}
                        className="text-yellow-600 hover:text-yellow-800"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(notification.id)}
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
    </div>
  );
};

export default AdminNotifications; 