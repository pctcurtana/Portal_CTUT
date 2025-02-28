import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const faqs = [
    { 
      question: 'Làm thế nào để đăng ký tài khoản dịch vụ công?', 
      answer: 'Sinh viên có thể đăng ký tài khoản bằng cách sử dụng email trường cấp và làm theo hướng dẫn trên trang đăng ký.' 
    },
    { 
      question: 'Thời gian xử lý hồ sơ trực tuyến là bao lâu?', 
      answer: 'Thời gian xử lý hồ sơ trực tuyến thông thường từ 1-3 ngày làm việc tùy theo loại dịch vụ.' 
    },
    { 
      question: 'Tôi có thể thanh toán học phí bằng những hình thức nào?', 
      answer: 'Trường hỗ trợ thanh toán học phí qua chuyển khoản ngân hàng, ví điện tử và các cổng thanh toán trực tuyến.' 
    }
  ];

  return (
    <section className="">
      <div className="container mx-auto px-0">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-[rgb(36,67,128)] text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-4">Câu hỏi thường gặp</h2>
              <p className="opacity-80 mb-6">
                Những câu hỏi phổ biến về dịch vụ công trực tuyến của trường
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-[rgb(36,67,128)] bg-white font-medium px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Xem tất cả FAQ
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </a>
            </div>

            <div className="p-8 md:w-2/3">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-[rgb(36,67,128)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;