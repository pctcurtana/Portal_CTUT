import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  QuestionMarkCircleIcon, 
  ChevronDownIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';

const AllFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Làm thế nào để đăng ký tài khoản?",
      answer: "Sử dụng email @student.ctut.edu.vn và điền thông tin cá nhân theo yêu cầu. Sau khi điền đầy đủ thông tin, hệ thống sẽ gửi email xác nhận để kích hoạt tài khoản của bạn."
    },
    {
      id: 2,
      question: "Quên mật khẩu phải làm sao?",
      answer: "Bạn có thể sử dụng chức năng 'Quên mật khẩu' trên trang đăng nhập. Nhập email đã đăng ký, hệ thống sẽ gửi link đặt lại mật khẩu qua email của bạn."
    },
    {
      id: 3,
      question: "Làm sao để cập nhật thông tin cá nhân?",
      answer: "Đăng nhập vào tài khoản, vào mục 'Thông tin cá nhân' và chọn 'Chỉnh sửa' để cập nhật các thông tin cần thiết."
    },
    {
      id: 4,
      question: "Thời gian xử lý hồ sơ?",
      answer: "Thời gian xử lý từ 1-5 ngày làm việc tùy theo loại dịch vụ. Bạn có thể xem thời gian cụ thể trong phần mô tả của từng dịch vụ."
    },
    {
      id: 5,
      question: "Cách theo dõi tiến độ hồ sơ?",
      answer: "Vào mục 'Lịch sử dịch vụ' để xem tiến độ xử lý. Hệ thống cũng sẽ gửi email thông báo khi có cập nhật mới về trạng thái hồ sơ."
    },
    {
      id: 6,
      question: "Quy trình xử lý đơn?",
      answer: "Quy trình gồm các bước: Tiếp nhận → Xử lý → Phê duyệt → Thông báo. Mỗi bước sẽ được cập nhật trạng thái trong mục 'Lịch sử dịch vụ'."
    },
    {
      id: 7,
      question: "Làm sao để liên hệ hỗ trợ?",
      answer: "Bạn có thể liên hệ qua email support@ctut.edu.vn hoặc hotline 1900xxxx trong giờ hành chính để được hỗ trợ."
    },
    {
      id: 8,
      question: "Gặp lỗi khi sử dụng dịch vụ?",
      answer: "Hãy chụp màn hình lỗi và gửi về email support@ctut.edu.vn kèm mô tả chi tiết về lỗi gặp phải để được hỗ trợ nhanh nhất."
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-2 pb-8 bg-gray-50 md:px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-[rgb(36,67,128)] font-medium">Câu hỏi thường gặp</span>
        </div>

        <div className="text-left mb-12">
          <div className='flex flex-col'>
            <h2 className="text-3xl font-bold text-[rgb(36,67,128)]">
              <div className='h-6.5 w-1.5 bg-yellow-400 mt-3 inline-block mr-2'></div>
              Câu hỏi thường gặp
            </h2>
            <span className="w-full bg-gray-200 h-px mt-1"></span>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <QuestionMarkCircleIcon className="h-5 w-5 text-[rgb(36,67,128)] mt-1 flex-shrink-0" />
                        <span className="ml-3 font-medium text-gray-900">{faq.question}</span>
                      </div>
                      <ChevronDownIcon 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          openQuestion === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {openQuestion === faq.id && (
                    <div className="mt-3 ml-8 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Không tìm thấy câu hỏi phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFAQ; 