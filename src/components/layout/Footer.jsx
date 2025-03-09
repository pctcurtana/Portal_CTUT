import React from 'react';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import Logo from '../../assets/logo.jpg';
import { footerLinks } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="bg-[rgb(25,46,88)] text-white pt-10 px-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3">          
              <img src={Logo} alt="" className='rounded-full h-13 w-13 sm:h-15 sm:w-15' />             
              <div className='inline'>
                <h3 className="font-bold text-xl sm:text-2xl tracking-wide">CỔNG DỊCH VỤ CÔNG</h3>
                <p className="opacity-90 text-sm sm:text-md text-gray-200 mt-1">ĐH KỸ THUẬT CÔNG NGHỆ CẦN THƠ</p>
              </div>
            </div>          
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">Liên kết</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ChevronRightIcon className="h-4 w-4 mr-2 text-yellow-400" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">Liên hệ</h3>
            <ul className="space-y-4">
              {[
                { icon: <MapPinIcon className="h-5 w-5" />, text: "Số 256 Nguyễn Văn Cừ, Quận Ninh Kiều, TP. Cần Thơ" },
                { icon: <PhoneIcon className="h-5 w-5" />, text: "(+84) 292-3890-698" },
                { icon: <EnvelopeIcon className="h-5 w-5" />, text: "contact@ctuet.edu.vn" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 Cổng Dịch vụ Công - Trường Đại học Kỹ thuật Công nghệ Cần Thơ. 
            Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
