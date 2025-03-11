import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const ServiceHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const historyData = [
    {
      id: 1,
      serviceName: "Xác nhận sinh viên",
      requestDate: "2024-03-20",
      status: "completed",
      result: "Đã duyệt",
      description: "Xác nhận sinh viên học kỳ 2 năm học 2023-2024",
      requestId: "XNS20240320001",
      studentInfo: {
        name: "Nguyễn Văn A",
        studentId: "2001202",
        email: "2001202@student.ctut.edu.vn"
      },
      documents: [
        "don-xac-nhan.pdf",
        "cmnd.jpg"
      ],
      progress: [
        { 
          step: 1, 
          name: "Đăng nhập hệ thống", 
          date: "20/03/2024 08:25",
          status: "completed",
          note: "Đăng nhập thành công",
          handler: "Hệ thống"
        },
        { 
          step: 2, 
          name: "Điền thông tin", 
          date: "20/03/2024 08:28",
          status: "completed",
          note: "Đã điền đầy đủ thông tin yêu cầu",
          handler: "Người dùng"
        },
        { 
          step: 3, 
          name: "Tải giấy tờ", 
          date: "20/03/2024 08:29",
          status: "completed",
          note: "Đã tải lên 2 tệp",
          handler: "Người dùng"
        },
        { 
          step: 4, 
          name: "Gửi yêu cầu", 
          date: "20/03/2024 08:30",
          status: "completed",
          note: "Yêu cầu đã được gửi thành công",
          handler: "Hệ thống"
        },
        { 
          step: 5, 
          name: "Tiếp nhận hồ sơ", 
          date: "20/03/2024 09:15",
          status: "completed",
          note: "Hồ sơ đã được tiếp nhận và kiểm tra",
          handler: "Nguyễn Thị B - Phòng Đào tạo"
        },
        { 
          step: 6, 
          name: "Xử lý hồ sơ", 
          date: "20/03/2024 14:20",
          status: "completed",
          note: "Hồ sơ hợp lệ và đã được phê duyệt",
          handler: "Nguyễn Thị B - Phòng Đào tạo"
        },
        { 
          step: 7, 
          name: "Hoàn thành", 
          date: "21/03/2024 10:00",
          status: "completed",
          note: "Kết quả đã được gửi qua email",
          handler: "Hệ thống"
        }
      ]
    },
    {
      id: 2,
      serviceName: "Cấp bảng điểm",
      requestDate: "2024-03-18",
      status: "pending",
      result: "Đang xử lý",
      description: "Cấp bảng điểm tích lũy đến học kỳ 1 năm học 2023-2024",
      requestId: "CBD20240318002",
      studentInfo: {
        name: "Nguyễn Văn A",
        studentId: "2001202",
        email: "2001202@student.ctut.edu.vn"
      },
      documents: [
        "don-cap-bang-diem.pdf"
      ],
      progress: [
        { 
          step: 1, 
          name: "Đăng nhập hệ thống", 
          date: "18/03/2024 10:25",
          status: "completed",
          note: "Đăng nhập thành công",
          handler: "Hệ thống"
        },
        { 
          step: 2, 
          name: "Điền thông tin", 
          date: "18/03/2024 10:28",
          status: "completed",
          note: "Đã điền đầy đủ thông tin yêu cầu",
          handler: "Người dùng"
        },
        { 
          step: 3, 
          name: "Tải giấy tờ", 
          date: "18/03/2024 10:29",
          status: "completed",
          note: "Đã tải lên 1 tệp",
          handler: "Người dùng"
        },
        { 
          step: 4, 
          name: "Gửi yêu cầu", 
          date: "18/03/2024 10:30",
          status: "completed",
          note: "Yêu cầu đã được gửi thành công",
          handler: "Hệ thống"
        },
        { 
          step: 5, 
          name: "Tiếp nhận hồ sơ", 
          date: "18/03/2024 14:15",
          status: "completed",
          note: "Hồ sơ đã được tiếp nhận",
          handler: "Trần Thị C - Phòng Đào tạo"
        },
        { 
          step: 6, 
          name: "Xử lý hồ sơ", 
          date: "Đang chờ",
          status: "current",
          note: "Đang trong quá trình xử lý",
          handler: "Phòng Đào tạo"
        },
        { 
          step: 7, 
          name: "Hoàn thành", 
          date: "Chưa xử lý",
          status: "pending",
          note: "Chưa hoàn thành",
          handler: "Chưa xác định"
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'current':
        return 'text-yellow-600 bg-yellow-50';
      case 'pending':
        return 'text-gray-600 bg-gray-50';
      case 'rejected':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'current':
        return <ClockIcon className="h-5 w-5 text-yellow-600" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-gray-400" />;
      case 'rejected':
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const filteredHistory = historyData.filter(item =>
    item.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-2 pb-8 px-4 bg-gray-50 md:px-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-[rgb(36,67,128)] font-medium">Lịch sử dịch vụ</span>
        </div>
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
            Lịch sử dịch vụ
          </h2>
          <div className="w-53 h-1 bg-yellow-400 flex mt-1"></div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              className="w-full md:w-96 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* History Cards */}
        <div className="space-y-6">
          {filteredHistory.map((item) => (
            <div key={item.id} className="bg-[rgb(36,67,128)]/10 rounded-xl shadow-sm overflow-hidden">
              {/* Service Info */}
              <div className="p-6 border-b border-gray-100">
                <div>
                  {/* Header với icon và tiêu đề */}
                  <div className="flex items-start">
                    <DocumentTextIcon className="h-12 w-12 text-[rgb(36,67,128)]" />
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {item.serviceName}
                        <span className="ml-3 text-sm text-gray-500">#{item.requestId}</span>
                      </h3>
                    </div>
                  </div>
                  
                  {/* Nội dung từ description trở xuống */}
                  <div className="mt-2 ml-2 sm:ml-16">
                    <p className="text-sm text-gray-800">{item.description}</p>
                    <div className="flex flex-row  sm:space-x-4 mt-2">
                      <span className="text-sm text-gray-800">
                        Ngày yêu cầu: {new Date(item.requestDate).toLocaleDateString('vi-VN')}
                      </span>
                      <div className="flex ml-4  space-x-1 sm:space-x-2">
                        {getStatusIcon(item.status)}
                        <span className={`inline-flex px-3 py rounded-full text-sm font-medium pb-0.5 flex items-center ${getStatusColor(item.status)}`}>
                          {item.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Timeline - Đơn giản hóa */}
              <div className="p-6 bg-gray-50">
                <div className="flex flex-nowrap overflow-x-auto pb-4">
                  {item.progress.map((step, index) => (
                    <div key={step.step} className="flex-none w-42 first:pl-0 last:pr-0">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                          step.status === 'completed' 
                            ? 'bg-green-500 border-green-500' 
                            : step.status === 'current'
                            ? 'bg-yellow-500 border-yellow-500'
                            : 'bg-white border-gray-300'
                        }`}>
                          <span className={`font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-white'}`}>
                            {step.step}
                          </span>
                        </div>
                        
                        {/* Connecting Line */}
                        {index < item.progress.length - 1 && (
                          <div className={`h-0.5 w-full ${
                            step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                        )}
                      </div>

                      {/* Step Info */}
                      <div className="mt-2 pr-4">
                        <p className="text-sm font-medium text-gray-900">{step.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                        <p className="text-xs text-gray-600 mt-1">{step.note}</p>
                        <p className="text-xs text-gray-500 mt-1">{step.handler}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHistory;