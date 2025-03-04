import { UserIcon, EnvelopeIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#244380]/10 flex items-center justify-center p-4 bg-contain">
      {/* Register Card */}
      <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-md space-y-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-100 rounded-full opacity-50" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-100 rounded-full opacity-50" />

        {/* Header */}
        <div className="text-center space-y-2 z-10 relative">
          <div className="inline-flex items-center">
            <img src={Logo} alt="" className='h-20 w-20 rounded-full mx-auto' />
          </div>
          <p className="text-[#244380] font-medium">Dịch vụ công trực tuyến CTUT</p>
        </div>

        {/* Registration Form */}
        <form className="space-y-6 z-10 relative">
          {/* Full Name Input */}
          <div className="space-y-1">
            <div className="relative">
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#244380] transition-all"
                placeholder="Họ và tên đầy đủ"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#244380] transition-all"
                placeholder="Địa chỉ email"
              />
            </div>
          </div>

          {/* Phone Number Input */}
          <div className="space-y-1">
            <div className="relative">
              <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#244380] transition-all"
                placeholder="Số điện thoại"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#244380] transition-all"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-[#244380] transition-all"
                placeholder="Xác nhận mật khẩu"
              />
            </div>
          </div>

          {/* Register Button */}        
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-[#244380] to-indigo-600 hover:from-[#244380]/90 hover:to-indigo-700 text-white py-3.5 px-4 rounded-xl font-medium transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Đăng ký tài khoản
            </button>

          {/* Login Link */}
          <div className='flex justify-center mt-4'>
            <p className='font-medium mr-2'>Đã có tài khoản?</p>
            <Link to="/login" className="text-[#244380] hover:text-blue-500">
              Đăng nhập ngay
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}