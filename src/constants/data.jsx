import {
    BookOpenIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    DocumentIcon, // Thiếu import này
    HomeIcon,
    ClockIcon,
    UserGroupIcon,
    CalendarIcon,
    BellAlertIcon,
    ChatBubbleLeftRightIcon, // Thiếu import này
    ShieldCheckIcon // Thiếu import này
  } from '@heroicons/react/24/outline';
  
  export const services = [
    { 
      title: 'Đăng ký học phần', 
      icon: <BookOpenIcon className="h-8 w-8"/> ,
      desc: 'Đăng ký các học phần, môn học trong kỳ học',
      category: 'academic',
      popular: true
    },
    { 
      title: 'Đóng học phí', 
      icon: <CurrencyDollarIcon className="h-8 w-8" />, 
      desc: 'Thanh toán học phí trực tuyến nhanh chóng, an toàn',
      category: 'financial',
      popular: true
    },
    { 
      title: 'Cấp bảng điểm', 
      icon: <DocumentTextIcon className="h-8 w-8" />, 
      desc: 'Yêu cầu cấp bảng điểm, bảng điểm tiếng Anh',
      category: 'document',
      popular: true
    },
    { 
      title: 'Cấp giấy xác nhận', 
      icon: <DocumentIcon className="h-8 w-8" />, 
      desc: 'Xác nhận sinh viên, xác nhận hoàn thành khóa học',
      category: 'document',
      popular: false
    },
    { 
      title: 'Đăng ký ký túc xá', 
      icon: <HomeIcon className="h-8 w-8" />, 
      desc: 'Đăng ký phòng ở ký túc xá cho sinh viên',
      category: 'facility',
      popular: true
    },
    { 
      title: 'Đăng ký thực tập', 
      icon: <ClockIcon className="h-8 w-8" />, 
      desc: 'Đăng ký thực tập tại doanh nghiệp đối tác',
      category: 'academic',
      popular: false
    },
    { 
      title: 'Đăng ký đồ án', 
      icon: <DocumentTextIcon className="h-8 w-8" />, 
      desc: 'Đăng ký đề tài và giảng viên hướng dẫn đồ án',
      category: 'academic',
      popular: false
    },
    { 
      title: 'Xin giấy giới thiệu', 
      icon: <DocumentIcon className="h-8 w-8" />, 
      desc: 'Yêu cầu cấp giấy giới thiệu thực tập, tham quan',
      category: 'document',
      popular: false
    }
  ];
  
  export const statistics = [
    { 
      number: '50+', 
      label: 'Dịch vụ trực tuyến', 
      icon: <DocumentTextIcon className="h-8 w-8" /> 
    },
    { 
      number: '24/7', 
      label: 'Hỗ trợ liên tục', 
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8" /> 
    },
    { 
      number: '15k+', 
      label: 'Người dùng', 
      icon: <UserGroupIcon className="h-8 w-8" /> 
    },
    { 
      number: '100%', 
      label: 'Bảo mật', 
      icon: <ShieldCheckIcon className="h-8 w-8" /> 
    }
  ];
  
  export const footerLinks = {
    quickLinks: [
      { title: 'Trang chủ Trường', href: '#' },
      { title: 'Cổng thông tin sinh viên', href: '#' },
      { title: 'Thư viện số', href: '#' },
      { title: 'E-learning', href: '#' },
      { title: 'Hệ thống email', href: '#' }
    ],
    support: [
      { title: 'Hướng dẫn sử dụng', href: '#' },
      { title: 'Câu hỏi thường gặp', href: '#' },
      { title: 'Quy trình thủ tục', href: '#' },
      { title: 'Biểu mẫu', href: '#' },
      { title: 'Báo lỗi hệ thống', href: '#' }
    ]
  };