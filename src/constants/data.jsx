import {
    BookOpenIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    DocumentIcon, 
    HomeIcon,
    ClockIcon,
  } from '@heroicons/react/24/outline';
  
  export const services = [
    { 
      id: 1,
      title: 'Đăng ký học phần', 
      icon: <BookOpenIcon className="h-8 w-8"/> ,
      desc: 'Đăng ký các học phần, môn học trong kỳ học',
      category: 'academic',
      popular: true
    },
    { 
      id: 2,
      title: 'Đóng học phí', 
      icon: <CurrencyDollarIcon className="h-8 w-8" />, 
      desc: 'Thanh toán học phí trực tuyến nhanh chóng, an toàn',
      category: 'financial',
      popular: true
    },
    { 
      id: 3,
      title: 'Cấp bảng điểm', 
      icon: <DocumentTextIcon className="h-8 w-8" />, 
      desc: 'Yêu cầu cấp bảng điểm, bảng điểm tiếng Anh',
      category: 'document',
      popular: true
    },
    { 
      id: 4,
      title: 'Cấp giấy xác nhận', 
      icon: <DocumentIcon className="h-8 w-8" />, 
      desc: 'Xác nhận sinh viên, xác nhận hoàn thành khóa học',
      category: 'document',
      popular: false
    },
    { 
      id: 5,
      title: 'Đăng ký ký túc xá', 
      icon: <HomeIcon className="h-8 w-8" />, 
      desc: 'Đăng ký phòng ở ký túc xá cho sinh viên',
      category: 'facility',
      popular: true
    },
    { 
      id: 6,
      title: 'Đăng ký thực tập', 
      icon: <ClockIcon className="h-8 w-8" />, 
      desc: 'Đăng ký thực tập tại doanh nghiệp đối tác',
      category: 'academic',
      popular: false
    },
    { 
      id: 7,
      title: 'Đăng ký đồ án', 
      icon: <DocumentTextIcon className="h-8 w-8" />, 
      desc: 'Đăng ký đề tài và giảng viên hướng dẫn đồ án',
      category: 'academic',
      popular: false
    },
    { 
      id: 8,
      title: 'Xin giấy giới thiệu', 
      icon: <DocumentIcon className="h-8 w-8" />, 
      desc: 'Yêu cầu cấp giấy giới thiệu thực tập, tham quan',
      category: 'document',
      popular: false
    }
  ];
  
  
  
  export const footerLinks =  [
      { id: 1, title: 'Trang chủ Trường', href: '#' },
      { id: 2, title: 'Cổng thông tin sinh viên', href: '#' },
      { id: 3, title: 'Facebook', href: '#' },
      { id: 4, title: 'E-learning', href: '#' },
      { id: 5, title: 'Hệ thống email', href: '#' }
    ];