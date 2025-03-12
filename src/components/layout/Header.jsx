import React, { useState, useRef, useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { Link } from "react-router-dom";
import { 
  UserIcon,
  BellAlertIcon,
  XMarkIcon,
  ClockIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';
import logo from '../../assets/logo.jpg';

// Dữ liệu mẫu cho thông báo
const sampleNotifications = [
  {
    id: 1,
    title: "Đơn xin xác nhận sinh viên đã được duyệt",
    content: "Đơn xin xác nhận sinh viên của bạn đã được duyệt. Vui lòng đến phòng A11 để nhận kết quả.",
    time: "5 phút trước",
    type: "success",
    isRead: false
  },
  {
    id: 2,
    title: "Yêu cầu bổ sung thông tin",
    content: "Đơn xin cấp bảng điểm của bạn cần bổ sung thêm thông tin. Vui lòng kiểm tra và cập nhật.",
    time: "2 giờ trước",
    type: "warning",
    isRead: false
  },
  {
    id: 3,
    title: "Đơn xin miễn học phí đã bị từ chối",
    content: "Đơn xin miễn học phí của bạn không được duyệt do thiếu giấy tờ chứng minh hoàn cảnh.",
    time: "1 ngày trước",
    type: "error",
    isRead: false
  },
  {
    id: 4,
    title: "Đơn đăng ký học phần đang được xử lý",
    content: "Đơn đăng ký học phần của bạn đang được xử lý. Vui lòng chờ phản hồi.",
    time: "2 ngày trước",
    type: "processing",
    isRead: true
  }
];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const notificationRef = useRef(null);
  const isScrolled = useScroll(10);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null);
  const isLoggedIn = true;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Xử lý click bên ngoài để đóng notification
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Đánh dấu đã đọc
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
      case 'warning':
        return <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>;
      case 'error':
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
      case 'processing':
        return <div className="w-2 h-2 bg-blue-500 rounded-full"></div>;
      default:
        return null;
    }
  };
  const getNotificationBackground = (type, isRead) => {
    if (isRead) return '';
    
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'error':
        return 'bg-red-50';
      case 'processing':
        return 'bg-blue-50';
      default:
        return '';
    }
  };

  // Đếm số thông báo chưa đọc
  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className={`${isScrolled ? 'py-2 shadow-xl' : 'shadow-md py-3'} bg-[rgb(36,67,128)] text-white sticky top-0 z-50`}>
    <div className="container mx-auto sm:px-10 px-4">
      <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <img src={logo} alt="" className='h-17 w-17 rounded-full sm:h-20 sm:w-20' />
            <div>
              <p className="font-bold hidden md:block md:text-3xl  tracking-wide">CỔNG DỊCH VỤ CÔNG</p>
              <p className="hidden md:block md:text-md">TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHỆ CẦN THƠ</p>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <Link to="/login">
                <Button variant="login" className="text-sm px-3 py-2 md:px-5 md:py-3 md:text-base">
                  <UserIcon className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2" />
                  Đăng nhập
                </Button>
              </Link>
            ) : (
              <div className="relative" ref={userMenuRef}>
                <button
                  className="flex items-center space-x-2 hover:bg-white/10 rounded-lg px-3 py-2 transition-colors"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <span className="hidden md:block">Nguyễn Văn A</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg overflow-hidden text-gray-800 
                  transition-all duration-300 ease-out transform origin-top scale-95 opacity-0 
                  animate-[fadeIn_0.3s_ease-out_forwards]">
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-medium text-gray-900">Nguyễn Văn A</p>
                      <p className="text-sm text-gray-500">student@ctut.edu.vn</p>
                    </div>
                    
                    <Link 
                      to="/service-history" 
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <ClockIcon className="h-5 w-5 text-gray-500" />
                      <span>Lịch sử dịch vụ</span>
                    </Link>

                    <button 
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors text-red-600"
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Notification Bell */}
           {isLoggedIn && <div className="relative" ref={notificationRef}>
              <button 
                className="md:p-2 p-1.5 hover:bg-white/10 rounded transition-colors relative"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center'><BellAlertIcon className="h-5 w-5" /></div>
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Panel */}
              {showNotifications && (
                <div className="absolute right-0 mt-1 w-80 md:w-96 bg-white rounded-lg shadow-lg overflow-hidden text-gray-800 z-50
                transition-all duration-200 ease-out transform origin-top scale-95 opacity-0 
                animate-[fadeIn_0.2s_ease-out_forwards]">
                  <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                    <h3 className="font-semibold text-lg">Thông báo</h3>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`p-4 border-b hover:bg-gray-100 cursor-pointer transition-colors ${
                            getNotificationBackground(notification.type, notification.isRead)
                          }`}
                          onClick={() => markAsRead(notification.id)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1.5">
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-medium text-sm">{notification.title}</h4>
                                <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{notification.content}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        Không có thông báo nào
                      </div>
                    )}
                  </div>
                  
                  {notifications.length > 0 && (
                    <div className="p-3 bg-gray-50 border-t text-center">
                      <button 
                        className="text-sm text-[rgb(36,67,128)] hover:underline font-medium"
                        onClick={() => setNotifications(notifications.map(n => ({ ...n, isRead: true })))}
                      >
                        Đánh dấu tất cả là đã đọc
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;