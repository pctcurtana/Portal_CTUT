import React from 'react';
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    { 
      id: 1,
      question: 'Làm thế nào để đăng ký tài khoản?',
      answer: 'Sử dụng email @student.ctut.edu.vn và điền thông tin cá nhân'
    },
    { 
      id: 2,
      question: 'Thời gian xử lý hồ sơ?',
      answer: 'Từ 1-5 ngày làm việc tùy loại dịch vụ'
    },
    {
      id: 3,
      question: 'Cách theo dõi tiến độ hồ sơ?',
      answer: 'Vào mục Lịch sử dịch vụ hoặc kiểm tra email thông báo'
    },
    {
      id: 4,
      question: 'Quy trình xử lý đơn?',
      answer: 'Tiếp nhận → Xử lý → Phê duyệt → Thông báo'
    }
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:text-left">
          <div className='flex flex-col'>
            <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
              <div className='h-6.5 w-1.5 bg-yellow-400 mt-3 inline-block mr-2'></div>
              Câu hỏi thường gặp
            </h2>
            <span className="w-full bg-gray-200 h-px mt-1"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {faqs.map((faq) => (
            <Link 
              to={`/faq/${faq.id}`}
              key={faq.id}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow group"
            >
              <div className="flex items-center justify-between mb-2">
                <QuestionMarkCircleIcon className="h-5 w-5 text-[rgb(36,67,128)]" />
                <ArrowRightIcon className="h-4 w-4 text-[rgb(36,67,128)] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-1">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600">
                {faq.answer}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center pb-4">
          <Link
            to="/faq"
            className="inline-flex items-center px-5 py-2 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors group"
          >
            Xem tất cả câu hỏi
            <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;