import React from 'react';
import { 
  UserGroupIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  BriefcaseIcon 
} from '@heroicons/react/24/outline';

const StatisticsSection = () => {
  const statistics = [
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      number: "15,000+",
      label: "Người dùng"
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8" />,
      number: "50+",
      label: "Dịch vụ trực tuyến"
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      number: "24/7",
      label: "Hỗ trợ liên tục"
    },
    {
      icon: <BriefcaseIcon className="h-8 w-8" />,
      number: "100%",
      label: "Hồ sơ đúng hạn"
    }
  ];

  return (
    <section className="mb-16 bg-[rgb(36,67,128)] text-white py-14  relative overflow-hidden rounded-2xl">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Thống kê dịch vụ
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Các số liệu thống kê về việc sử dụng dịch vụ công trực tuyến của trường
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full p-4 inline-flex mb-4 backdrop-blur-sm">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;