import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ArrowRightIcon,
  UserIcon,
  BellIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

// Data mẫu cho thông báo
const notifications = [
  {
    id: 1,
    title: "Thông báo về việc tổ chức Lễ tốt nghiệp đợt 1 năm 2024",
    content: "Trường thông báo đến sinh viên về kế hoạch tổ chức Lễ tốt nghiệp đợt 1 năm 2024. Sinh viên cần chuẩn bị đầy đủ hồ sơ và thực hiện theo các bước...",
    date: "20/03/2024",
    department: "Phòng Đào tạo",
    isNew: true
  },
  {
    id: 2,
    title: "Hướng dẫn đăng ký học phần học kỳ 2 năm học 2023-2024",
    content: "Phòng Đào tạo hướng dẫn sinh viên quy trình đăng ký học phần trực tuyến cho học kỳ 2 năm học 2023-2024. Thời gian đăng ký từ ngày...",
    date: "18/03/2024",
    department: "Phòng Đào tạo",
    isNew: true
  },
  {
    id: 3,
    title: "Thông báo về việc nghỉ Lễ 30/4 và 1/5 năm 2024",
    content: "Trường thông báo lịch nghỉ Lễ 30/4 và 1/5 năm 2024 đối với cán bộ, giảng viên và sinh viên toàn trường. Thời gian nghỉ bắt đầu từ...",
    date: "15/03/2024",
    department: "Phòng Tổ chức - Hành chính",
    isNew: false
  },
  {
    id: 4,
    title: "Thông báo đóng học phí học kỳ 2 năm học 2023-2024",
    content: "Phòng Kế hoạch - Tài chính thông báo về việc đóng học phí học kỳ 2 năm học 2023-2024. Sinh viên thực hiện đóng học phí theo thời hạn...",
    date: "14/03/2024",
    department: "Phòng Kế hoạch - Tài chính",
    isNew: false
  }
];

const NewsSection = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:text-left">
          <div className='flex flex-col'>
            <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
              <div className='h-6.5 w-1.5 bg-yellow-400 mt-3 inline-block mr-2'></div>
              Thông báo
            </h2>
            <span className="w-full bg-gray-200 h-px mt-1"></span>
          </div>
        </div>

        {/* Notifications List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {notifications.map((notification) => (
            <Link 
              to={`/notifications/${notification.id}`}
              key={notification.id}
              className="block rounded-lg shadow-sm transition-all duration-200 border-l-4 border-[rgb(36,67,128)] bg-[rgb(36,67,128)]/10 hover:bg-[rgb(36,67,128)]/20"
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <BellIcon className="h-6 w-6 text-[rgb(36,67,128)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-medium text-gray-900 truncate">
                        {notification.title}
                      </h3>
                      {notification.isNew && (
                        <span className="px-2 py-0.5 bg-[rgb(36,67,128)] text-white text-xs font-medium rounded-full">
                          Mới
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {notification.content}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <div className="flex items-center">
                        <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                        {notification.date}
                      </div>
                      <div className="flex items-center">
                        <UserIcon className="h-3.5 w-3.5 mr-1" />
                        {notification.department}
                      </div>
                    </div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 flex-shrink-0 self-center" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/notifications"
            className="inline-flex items-center px-5 py-2 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors group"
          >
            Xem tất cả thông báo
            <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;