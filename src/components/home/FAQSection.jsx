import React from 'react';
import { QuestionMarkCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const FAQSection = () => {
  const faqs = [
    { 
      id: 1,
      question: 'Làm thế nào để đăng ký tài khoản dịch vụ công?',
      answer: 'Để đăng ký tài khoản dịch vụ công, bạn cần thực hiện các bước sau:\n1. Truy cập vào trang đăng ký\n2. Sử dụng email trường cấp (@student.ctut.edu.vn)\n3. Điền đầy đủ thông tin cá nhân\n4. Xác thực email và hoàn tất đăng ký',
      category: 'Tài khoản'
    },
    { 
      id: 2,
      question: 'Thời gian xử lý hồ sơ trực tuyến là bao lâu?',
      answer: 'Thời gian xử lý hồ sơ phụ thuộc vào loại dịch vụ:\n- Xác nhận sinh viên: 1-2 ngày\n- Bảng điểm: 2-3 ngày\n- Giấy giới thiệu: 1 ngày\n- Các loại đơn khác: 3-5 ngày làm việc',
      category: 'Thời gian'
    },
    {
      id: 3,
      question: 'Làm sao để theo dõi tiến độ xử lý hồ sơ?',
      answer: 'Bạn có thể theo dõi tiến độ xử lý hồ sơ bằng các cách:\n1. Đăng nhập vào tài khoản và vào mục "Lịch sử dịch vụ"\n2. Kiểm tra email thông báo từ hệ thống\n3. Nhập mã hồ sơ vào công cụ tra cứu\n4. Liên hệ hotline hỗ trợ: 1900.xxxx',
      category: 'Theo dõi'
    },
    {
      id: 4,
      question: 'Quy trình xử lý đơn từ diễn ra như thế nào?',
      answer: 'Quy trình xử lý đơn gồm các bước:\n1. Tiếp nhận hồ sơ trực tuyến\n2. Chuyển đến bộ phận xử lý\n3. Phê duyệt\n4. Thông báo kết quả.',
      category: 'Quy trình'
    }
   
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:text-left">
          <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
            Câu hỏi thường gặp
          </h2>
          <div className="w-71 h-1 bg-yellow-400 mx-auto md:mx-0 mt-1"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-[rgb(36,67,128)]/10 rounded-xl p-3 md:p-6 border border-gray-100"
            >
              {/* Question Header */}
              <div className="flex items-start gap-2 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgb(36,67,128)] rounded-full flex items-center justify-center mt-7">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-[rgb(36,67,128)] text-white text-xs font-medium rounded-full mb-2">
                    {faq.category}
                  </span>
                  <h3 className="font-semibold text-gray-1000 mb-3">
                    {faq.question}
                  </h3>
                  <div className="text-gray-600 space-y-2">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={`${faq.id}-line-${i}`} className="text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="text-center mt-10">
          <a 
            href="/faq" 
            className="inline-flex items-center px-4 py-3 bg-[rgb(36,67,128)] text-white font-medium rounded-lg hover:bg-[rgb(26,57,118)] transition-colors"
          >
            Xem tất cả câu hỏi
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;