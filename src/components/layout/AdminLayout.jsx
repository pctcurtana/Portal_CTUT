import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  Cog6ToothIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  BellIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import logo from '../../assets/logo.jpg';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Tổng quan', href: '/admin', icon: ChartBarIcon },
    { name: 'Quản lý dịch vụ', href: '/admin/services', icon: WrenchScrewdriverIcon },
    { name: 'Quản lý người dùng', href: '/admin/users', icon: UsersIcon },
    { name: 'Thông báo', href: '/admin/notifications', icon: BellIcon },
    { name: 'Cài đặt', href: '/admin/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-[rgb(36,67,128)] transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-[rgb(26,57,118)]">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
            <div className="text-white">
              <h2 className="text-sm font-bold">ADMIN PANEL</h2>
              <p className="text-xs text-gray-300">CTUT Portal</p>
            </div>
          </div>
          <button
            className="md:hidden text-white hover:bg-white/10 p-1 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = item.href === '/admin' 
                ? location.pathname === '/admin'
                : location.pathname.startsWith(item.href);
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-yellow-400 text-[rgb(36,67,128)] font-semibold'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive ? 'text-[rgb(36,67,128)]' : 'text-gray-400 group-hover:text-gray-300'
                      }`}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User info và logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-white/10 rounded-lg p-3 mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-[rgb(36,67,128)] font-bold text-sm">A</span>
              </div>
              <div className="text-white">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-gray-300">admin@ctut.edu.vn</p>
              </div>
            </div>
          </div>
          
          <Link
            to="/"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5" />
            Về trang chính
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-[rgb(36,67,128)]">
                Dashboard Quản Trị
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-sm text-gray-500 hover:text-[rgb(36,67,128)] flex items-center"
              >
                <HomeIcon className="h-4 w-4 mr-1" />
                Trang chủ
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 