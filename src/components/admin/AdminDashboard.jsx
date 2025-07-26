import React from 'react';
import {
  UsersIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const stats = [
    {
      name: 'Tổng người dùng',
      value: '15,247',
      change: '+12%',
      changeType: 'increase',
      icon: UsersIcon,
      color: 'bg-blue-50 text-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      name: 'Dịch vụ hoạt động',
      value: '8',
      change: '+2',
      changeType: 'increase', 
      icon: WrenchScrewdriverIcon,
      color: 'bg-green-50 text-green-600',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Đơn đã xử lý',
      value: '3,456',
      change: '+8%',
      changeType: 'increase',
      icon: CheckCircleIcon,
      color: 'bg-purple-50 text-purple-600',
      bgColor: 'bg-purple-500'
    },
    {
      name: 'Đơn chờ xử lý',
      value: '127',
      change: '-5%',
      changeType: 'decrease',
      icon: ClockIcon,
      color: 'bg-yellow-50 text-yellow-600',
      bgColor: 'bg-yellow-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: 'Nguyễn Văn A',
      action: 'đã nộp đơn xin cấp bảng điểm',
      time: '5 phút trước',
      status: 'pending'
    },
    {
      id: 2,
      user: 'Trần Thị B',
      action: 'đã hoàn thành đăng ký học phần',
      time: '10 phút trước',
      status: 'completed'
    },
    {
      id: 3,
      user: 'Lê Văn C',
      action: 'đã đóng học phí học kỳ 1',
      time: '15 phút trước',
      status: 'completed'
    },
    {
      id: 4,
      user: 'Phạm Thị D',
      action: 'đã nộp đơn xin xác nhận sinh viên',
      time: '30 phút trước',
      status: 'processing'
    },
    {
      id: 5,
      user: 'Hoàng Văn E',
      action: 'đã đăng ký ký túc xá',
      time: '1 giờ trước',
      status: 'pending'
    }
  ];

  const popularServices = [
    { name: 'Đăng ký học phần', usage: 2341, percentage: 85 },
    { name: 'Cấp bảng điểm', usage: 1876, percentage: 68 },
    { name: 'Đóng học phí', usage: 1654, percentage: 60 },
    { name: 'Đăng ký ký túc xá', usage: 987, percentage: 35 },
    { name: 'Cấp giấy xác nhận', usage: 743, percentage: 27 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Hoàn thành';
      case 'processing':
        return 'Đang xử lý';
      case 'pending':
        return 'Chờ xử lý';
      default:
        return 'Không xác định';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[rgb(36,67,128)] to-[rgb(56,92,165)] rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Chào mừng trở lại, Admin!</h2>
        <p className="text-blue-100">Đây là tổng quan về hoạt động hệ thống Cổng Dịch Vụ Công CTUT</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[rgb(36,67,128)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">từ tháng trước</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[rgb(36,67,128)]">Hoạt động gần đây</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {getStatusText(activity.status)}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="text-[rgb(36,67,128)] text-sm font-medium hover:text-[rgb(56,92,165)] flex items-center">
                <EyeIcon className="h-4 w-4 mr-1" />
                Xem tất cả hoạt động
              </button>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="bg-white rounded-xl shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-[rgb(36,67,128)]">Dịch vụ phổ biến</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {popularServices.map((service, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{service.name}</span>
                    <span className="text-sm text-gray-500">{service.usage} lượt</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[rgb(36,67,128)] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${service.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-[rgb(36,67,128)] mb-4">Thao tác nhanh</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 bg-[rgb(36,67,128)] hover:bg-[rgb(56,92,165)] text-white px-4 py-3 rounded-lg transition-colors">
            <WrenchScrewdriverIcon className="h-5 w-5" />
            <span>Thêm dịch vụ</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors">
            <UsersIcon className="h-5 w-5" />
            <span>Quản lý user</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors">
            <DocumentTextIcon className="h-5 w-5" />
            <span>Báo cáo</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg transition-colors">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span>Cảnh báo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 