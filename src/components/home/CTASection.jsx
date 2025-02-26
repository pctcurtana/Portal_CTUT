import React from 'react';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';

const CTASection = () => {
  const features = [
    { 
      title: 'Bảo mật thông tin', 
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      description: 'Đảm bảo an toàn dữ liệu'
    },
    { 
      title: 'Xử lý nhanh chóng', 
      icon: <ClockIcon className="h-6 w-6" />,
      description: 'Tiết kiệm thời gian'
    },
    { 
      title: 'Theo dõi tiến độ', 
      icon: <ChartBarIcon className="h-6 w-6" />,
      description: 'Cập nhật trạng thái'
    },
    { 
      title: 'Hỗ trợ 24/7', 
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      description: 'Luôn sẵn sàng giúp đỡ'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-0">
        <div className="bg-gradient-to-r from-[rgb(36,67,128)] to-[rgb(56,92,165)] rounded-3xl overflow-hidden shadow-xl">
          <div className="px-8 py-16 md:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Bắt đầu sử dụng dịch vụ công trực tuyến
                </h2>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  Đăng ký tài khoản ngay hôm nay để trải nghiệm các dịch vụ trực tuyến 
                  tiện lợi và nhanh chóng. Chúng tôi cam kết mang đến trải nghiệm 
                  tốt nhất cho người dùng.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    icon 
                    className="!px-8 !py-3 text-lg shadow-lg hover:shadow-xl"
                  >
                    Đăng ký ngay
                  </Button>
                  <Button 
                    variant="outline" 
                    className="!text-white !border-white hover:!bg-white hover:!text-[rgb(36,67,128)] !px-8 !py-3 text-lg"
                  >
                    Tìm hiểu thêm
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-1 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                      >
                        <div className="text-yellow-400 bg-white/10 rounded-full p-2">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;