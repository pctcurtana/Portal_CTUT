import React, { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { 
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';
import logo from '../../assets/logo.jpg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll(10);

  return (
    <header className={`${
      isScrolled ? 'py-3 shadow-lg' : ' py-5'
    } bg-[rgb(36,67,128)] text-white sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto sm:px-10 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
        
              <img src={logo}alt="" className=' h-15 w-15 rounded-full sm:h-20 sm:w-20' />
            
            <div>
              <p className="font-bold text-2xl md:text-3xl lh-1 tracking-wide">CỔNG DỊCH VỤ CÔNG</p>
              <p className=" text-md md:text-xl">ĐH KỸ THUẬT CÔNG NGHỆ CẦN THƠ</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="nav-link">Trang chủ</a>
            <a href="#" className="nav-link">Dịch vụ</a>
            <a href="#" className="nav-link">Tin tức</a>
            <a href="#" className="nav-link">Hướng dẫn</a>
            <a href="#" className="nav-link">Liên hệ</a>
          </nav> */}

          {/* User Actions */}
          <div className="flex items-center  ">
            
              <Link to ="/login">
                <Button variant="secondary" className=" scale-80 text-sm md:scale-100 md:px-6 md:py-3 md:text-base ">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Đăng nhập
                </Button>
              </Link>
            <button className="md:p-2 p-1.5  hover:bg-white/10 rounded transition-colors relative">
              <BellAlertIcon className="md:h-6 md:w-6 h-5 w-5 "  />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeDown">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">Trang chủ</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Dịch vụ</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Tin tức</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Hướng dẫn</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Liên hệ</a>
            </nav>
            <div className="mt-4 flex flex-col space-y-4">
              <Link to ="/login">
                <Button variant="secondary" className="w-full justify-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Đăng nhập
                </Button>
              </Link>
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;