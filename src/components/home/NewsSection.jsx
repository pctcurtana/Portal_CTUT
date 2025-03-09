import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarIcon, 
  ArrowRightIcon,
  UserIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

// Data mẫu cho tin tức
const newsData = [
  {
    id: 1,
    title: "Thông báo về việc tổ chức Lễ tốt nghiệp đợt 1 năm 2024",
    excerpt: "Trường thông báo đến sinh viên về kế hoạch tổ chức Lễ tốt nghiệp đợt 1 năm 2024. Sinh viên cần chuẩn bị...",
    image: "https://picsum.photos/800/500?random=1",
    date: "20/03/2024",
    author: "Phòng Đào tạo",
    comments: 5,
    category: "Thông báo"
  },
  {
    id: 2,
    title: "Hướng dẫn đăng ký học phần học kỳ 2 năm học 2023-2024",
    excerpt: "Phòng Đào tạo hướng dẫn sinh viên quy trình đăng ký học phần trực tuyến cho học kỳ 2 năm học 2023-2024...",
    image: "https://picsum.photos/800/500?random=2",
    date: "18/03/2024",
    author: "Phòng Đào tạo",
    comments: 12,
    category: "Hướng dẫn"
  },
  {
    id: 3,
    title: "Thông báo về việc nghỉ Lễ 30/4 và 1/5 năm 2024",
    excerpt: "Trường thông báo lịch nghỉ Lễ 30/4 và 1/5 năm 2024 đối với cán bộ, giảng viên và sinh viên toàn trường...",
    image: "https://picsum.photos/800/500?random=3",
    date: "15/03/2024",
    author: "Phòng Tổ chức - Hành chính",
    comments: 3,
    category: "Thông báo"
  }
];

const NewsSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:text-left">
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)] mb-1">
            Tin tức & Thông báo
          </h2>
          <div className=" w-74 h-1 bg-yellow-400 mx-auto md:mx-0 mt-1"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div 
              key={news.id}
              className="bg-[rgb(36,67,128)]/10 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[rgb(36,67,128)] text-white text-sm px-3 py-1 rounded-full">
                  {news.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-[rgb(36,67,128)] transition-colors">
                  <Link to={`/news/${news.id}`}>
                    {news.title}
                  </Link>
                </h3>
                <p className="text-gray-900 mb-4 line-clamp-2">
                  {news.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-900 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {news.author}
                    </div>
                    <div className="flex items-center">
                      <ChatBubbleLeftIcon className="h-4 w-4 mr-1" />
                      {news.comments}
                    </div>
                  </div>
                </div>

                {/* Read more button */}
                <Link 
                  to={`/news/${news.id}`}
                  className="inline-flex items-center text-[rgb(36,67,128)] font-medium hover:underline"
                >
                  Xem thêm
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors"
          >
            Xem tất cả tin tức
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;