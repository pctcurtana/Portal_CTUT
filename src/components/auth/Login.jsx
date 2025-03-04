import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.jpg'
import CTUET from '../../assets/ctuet.jpg'
import { Link } from "react-router-dom";





export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#244380]/10 flex items-center justify-center p-4 bg-contain "  >
      {/* Login Card */}
      <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-md space-y-8 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-100 rounded-full opacity-50" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-100 rounded-full opacity-50" />
        
        {/* Header */}
        <div className="text-center space-y-2 z-10 relative">

            <div className="inline-flex items-center">
                <span>
                    <img src={Logo} alt="" className='h-20 w-20 rounded-full' />
                </span>
            </div>
            <p  className=" text-[#244380] font-medium">Dịch vụ công trực tuyến CTUT</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6 z-10 relative">
          {/* Username Input */}
          <div className="space-y-1">
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                placeholder="Tên đăng nhập"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          {/* Login Button */}
          <Link to ="/">
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-[#244380] to-indigo-600 hover:from-[#244380]/90 hover:to-indigo-700 text-white py-3.5 px-4 rounded-xl font-medium transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Truy cập hệ thống
              </button>
          </Link>
            <div className='flex justify-center mt-4'>
                <p className='font-medium mr-2'>Chưa có tài khoản? </p>
                <Link to ="/register" className="text-[#244380] hover:text-blue-500">
                  Đăng ký ngay
                </Link>
            </div>
          
          
        </form>
      </div>
    </div>
  )
}