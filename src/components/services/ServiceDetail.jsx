import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../../constants/data';
import { ArrowLeftIcon, ClockIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id) || services[0];

  const handleStartService = () => {
    navigate(`/service/${id}/use`);
  };

  return (
    <div className="container mx-auto px-4 pt-2 pb-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/services" className="hover:text-[rgb(36,67,128)]">Tất cả dịch vụ</Link>
        <span className="mx-2">/</span>
        <span className="text-[rgb(36,67,128)] font-medium">{service.title}</span>
      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[rgb(36,67,128)] p-8 text-white">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              {service.icon}
            </div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
            {service.popular && (
              <span className="ml-4 bg-yellow-500 text-xs text-white px-3 w-25 md:w-auto py-1 rounded-full mt-1">
                Phổ biến
              </span>
            )}
          </div>
          <p className="text-white/80 text-lg max-w-3xl">{service.desc}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <ClockIcon className="h-8 w-8 text-[rgb(36,67,128)] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Thời gian xử lý</p>
                <p className="font-medium">3-5 ngày làm việc</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <DocumentTextIcon className="h-8 w-8 text-[rgb(36,67,128)] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Giấy tờ cần thiết</p>
                <p className="font-medium">Đơn yêu cầu, CMND/CCCD</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg flex items-center">
              <UserGroupIcon className="h-8 w-8 text-[rgb(36,67,128)] mr-3" />
              <div>
                <p className="text-sm text-gray-500">Đối tượng áp dụng</p>
                <p className="font-medium">Sinh viên, Cán bộ</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-[rgb(36,67,128)] mb-4">Mô tả dịch vụ</h2>
            <p className="text-gray-600 mb-4">
              {service.desc} Dịch vụ này được cung cấp nhằm hỗ trợ người dùng thực hiện các thủ tục hành chính một cách nhanh chóng và thuận tiện thông qua hệ thống trực tuyến.
            </p>
            <p className="text-gray-600">
              Khi sử dụng dịch vụ này, bạn cần chuẩn bị đầy đủ thông tin cá nhân và các giấy tờ liên quan theo yêu cầu. Hệ thống sẽ hướng dẫn bạn từng bước để hoàn thành quy trình.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-[rgb(36,67,128)] mb-4">Quy trình thực hiện</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>Đăng nhập vào hệ thống bằng tài khoản sinh viên/cán bộ</li>
              <li>Chọn dịch vụ "{service.title}" từ danh sách dịch vụ</li>
              <li>Điền đầy đủ thông tin theo form yêu cầu</li>
              <li>Tải lên các giấy tờ cần thiết (nếu có)</li>
              <li>Xác nhận thông tin và gửi yêu cầu</li>
              <li>Theo dõi trạng thái xử lý trên hệ thống</li>
              <li>Nhận kết quả qua email hoặc trực tiếp tại văn phòng</li>
            </ol>
          </div>

          <div className="flex justify-center">
            <Button 
              className="!px-8 !py-3 text-lg"
              onClick={handleStartService}
            >
              Bắt đầu sử dụng dịch vụ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;