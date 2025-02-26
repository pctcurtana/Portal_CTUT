import React from 'react';
import { 
  AcademicCapIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { footerLinks } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="bg-[rgb(25,46,88)] text-white pt-10 pb-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-1.5 rounded-full">
                <AcademicCapIcon className="h-8 w-8 text-[rgb(36,67,128)]" />
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-wide">CỔNG DỊCH VỤ CÔNG</h3>
                <p className="text-sm opacity-90">ĐH KỸ THUẬT CÔNG NGHỆ CẦN THƠ</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Cổng dịch vụ công trực tuyến của Trường Đại học Kỹ thuật Công nghệ Cần Thơ, 
              cung cấp các dịch vụ hành chính công phục vụ sinh viên, giảng viên và cán bộ.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <SocialIcon href="#" type="facebook" />
              <SocialIcon href="#" type="twitter" />
              <SocialIcon href="#" type="youtube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Liên kết
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Hỗ trợ
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <FooterLink key={index} {...link} />
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Liên hệ
            </h3>
            <ul className="space-y-4">
              <ContactInfo 
                icon={<MapPinIcon className="h-5 w-5" />}
                text="Số 256 Nguyễn Văn Cừ, Quận Ninh Kiều, TP. Cần Thơ"
              />
              <ContactInfo 
                icon={<PhoneIcon className="h-5 w-5" />}
                text="(+84) 292-3890-698"
              />
              <ContactInfo 
                icon={<EnvelopeIcon className="h-5 w-5" />}
                text="contact@ctuet.edu.vn"
              />
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 Cổng Dịch vụ Công - Trường Đại học Kỹ thuật Công nghệ Cần Thơ. 
             Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ title, href }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <ChevronRightIcon className="h-4 w-4 mr-2 text-yellow-400" />
      {title}
    </a>
  </li>
);

const ContactInfo = ({ icon, text }) => (
  <li className="flex items-start gap-3">
    <div className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full mt-0.5">
      {icon}
    </div>
    <span className="text-gray-300">{text}</span>
  </li>
);

const SocialIcon = ({ href, type }) => {
  const icons = {
    facebook: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
    twitter: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    youtube: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
  };

  const colors = {
    facebook: "bg-blue-600 hover:bg-blue-700",
    twitter: "bg-blue-400 hover:bg-blue-500",
    youtube: "bg-red-600 hover:bg-red-700"
  };

  return (
    <a 
      href={href} 
      className={`${colors[type]} w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
    >
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d={icons[type]} />
      </svg>
    </a>
  );
};

export default Footer;