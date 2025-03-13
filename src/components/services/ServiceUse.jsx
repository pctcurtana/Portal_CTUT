import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../../constants/data';
import { 
  ArrowLeftIcon, 
  CheckCircleIcon, 
  DocumentArrowUpIcon, 
  ExclamationCircleIcon,
  InformationCircleIcon,
  UserIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  PaperClipIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Button } from '../shared/Button';

const ServiceUse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id) || services[0];
  
  const [formData, setFormData] = useState({
    // Thông tin cá nhân
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    faculty: '',
    course: '',
    
    // Chi tiết yêu cầu
    purpose: '',
    details: '',
    requestDate: '',
    receiveMethod: 'email',
    
    // Thông tin bổ sung
    additionalInfo: '',
    
    // Điều khoản
    acceptTerms: false,
    acceptPrivacy: false
  });
  
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate personal info
    if (!formData.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ tên';
    if (!formData.studentId.trim()) newErrors.studentId = 'Vui lòng nhập mã sinh viên/cán bộ';
    if (!formData.email.trim()) newErrors.email = 'Vui lòng nhập email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email không hợp lệ';
    if (!formData.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    
    // Validate request details
    if (!formData.purpose.trim()) newErrors.purpose = 'Vui lòng chọn mục đích sử dụng';
    if (!formData.details.trim()) newErrors.details = 'Vui lòng nhập thông tin chi tiết';
    if (!formData.requestDate.trim()) newErrors.requestDate = 'Vui lòng chọn ngày yêu cầu';
    
    // Validate terms
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Bạn cần đồng ý với điều khoản dịch vụ';
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Bạn cần đồng ý với chính sách bảo mật';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setShowSuccessModal(true);
      }, 2000);
    } else {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const renderSuccessModal = () => {
    const requestId = `REQ-${Math.floor(100000 + Math.random() * 900000)}`;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
          <button 
            onClick={() => navigate('/')} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          
          <div className="text-center py-6">
            <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yêu cầu đã được gửi thành công!</h2>
            <p className="text-gray-600 mb-6">
              Yêu cầu của bạn đã được tiếp nhận và đang được xử lý. Mã yêu cầu của bạn là <span className="font-bold text-[rgb(36,67,128)]">{requestId}</span>
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg text-left mb-6">
              <h3 className="font-medium text-[rgb(36,67,128)] mb-2">Các bước tiếp theo</h3>
              <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                <li>Kiểm tra email xác nhận đã được gửi đến {formData.email}</li>
                <li>Theo dõi trạng thái xử lý yêu cầu trong mục "Yêu cầu của tôi"</li>
                <li>Bạn sẽ nhận được thông báo khi yêu cầu được xử lý xong</li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="!px-6 !py-2"
                onClick={() => navigate(`/service/${id}`)}
              >
                Quay lại trang dịch vụ
              </Button>
              <Button 
                className="!px-6 !py-2"
                onClick={() => navigate('/')}
              >
                Về trang chủ
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      {/* Breadcrumb */}
      <div className="flex items-center px-4 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-[rgb(36,67,128)]">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/#services" className="hover:text-[rgb(36,67,128)]">Dịch vụ</Link>
        <span className="mx-2">/</span>
        <Link to={`/service/${id}`} className="hover:text-[rgb(36,67,128)]">{service.title}</Link>
        <span className="mx-2">/</span>
        <span className="text-[rgb(36,67,128)] font-medium">Sử dụng dịch vụ</span>
      </div>

      {/* Back button */}
      <Link to={`/service/${id}`} className="inline-flex px-4 items-center text-[rgb(36,67,128)] hover:underline mb-6">
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        Quay lại thông tin dịch vụ
      </Link>

      {/* Page header */}
      <div className="bg-[rgb(36,67,128)] rounded-t-xl p-6 text-white  " >
        <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
        <p className="text-white/80">{service.desc}</p>
      </div>

      {/* Main content */}
      <div className="bg-white shadow-lg rounded-b-xl p-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="flex">
            <InformationCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-blue-700">Hướng dẫn sử dụng dịch vụ</p>
              <p className="text-blue-600">Vui lòng điền đầy đủ thông tin vào form dưới đây. Các trường đánh dấu <span className="text-red-500">*</span> là bắt buộc.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Thông tin cá nhân */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
            <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 flex items-center">
              <UserIcon className="h-5 w-5 text-[rgb(36,67,128)] mr-2" />
              <h2 className="text-lg font-semibold text-[rgb(36,67,128)]">Thông tin cá nhân</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nhập họ và tên"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1 error-message">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mã sinh viên/cán bộ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.studentId ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nhập mã sinh viên/cán bộ"
                  />
                  {errors.studentId && <p className="text-red-500 text-sm mt-1 error-message">{errors.studentId}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nhập địa chỉ email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1 error-message">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nhập số điện thoại"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1 error-message">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Khoa/Phòng ban
                  </label>
                  <select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
                  >
                    <option value="">-- Chọn Khoa/Phòng ban --</option>
                    <option value="cntt">Công nghệ thông tin</option>
                    <option value="dtvt">Điện tử viễn thông</option>
                    <option value="ktmt">Kỹ thuật máy tính</option>
                    <option value="ktdl">Khoa học dữ liệu</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Khóa học
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
                  >
                    <option value="">-- Chọn khóa học --</option>
                    <option value="k65">K65</option>
                    <option value="k66">K66</option>
                    <option value="k67">K67</option>
                    <option value="k68">K68</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chi tiết yêu cầu */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
            <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 flex items-center">
              <ClipboardDocumentListIcon className="h-5 w-5 text-[rgb(36,67,128)] mr-2" />
              <h2 className="text-lg font-semibold text-[rgb(36,67,128)]">Chi tiết yêu cầu</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Mục đích sử dụng <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.purpose ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">-- Chọn mục đích --</option>
                    <option value="internship">Thực tập</option>
                    <option value="job">Xin việc</option>
                    <option value="scholarship">Học bổng</option>
                    <option value="study">Học tập</option>
                    <option value="research">Nghiên cứu</option>
                    <option value="other">Khác</option>
                  </select>
                  {errors.purpose && <p className="text-red-500 text-sm mt-1 error-message">{errors.purpose}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Thông tin chi tiết <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.details ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Mô tả chi tiết yêu cầu của bạn"
                  ></textarea>
                  {errors.details && <p className="text-red-500 text-sm mt-1 error-message">{errors.details}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ngày yêu cầu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="requestDate"
                    value={formData.requestDate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)] ${
                      errors.requestDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.requestDate && <p className="text-red-500 text-sm mt-1 error-message">{errors.requestDate}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phương thức nhận kết quả
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="email-receive"
                        name="receiveMethod"
                        value="email"
                        checked={formData.receiveMethod === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="email-receive">Qua email</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="office-receive"
                        name="receiveMethod"
                        value="office"
                        checked={formData.receiveMethod === 'office'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <label htmlFor="office-receive">Trực tiếp tại văn phòng</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tải lên tài liệu */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
            <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 flex items-center">
              <DocumentTextIcon className="h-5 w-5 text-[rgb(36,67,128)] mr-2" />
              <h2 className="text-lg font-semibold text-[rgb(36,67,128)]">Tải lên tài liệu</h2>
            </div>
            <div className="p-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-[rgb(36,67,128)] mb-2">Tài liệu cần thiết</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Đơn yêu cầu (bắt buộc)</li>
                  <li>CMND/CCCD (bắt buộc)</li>
                  <li>Các giấy tờ liên quan khác (nếu có)</li>
                </ul>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <DocumentArrowUpIcon className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600 mb-4">Kéo và thả file vào đây hoặc</p>
                <label className="bg-[rgb(36,67,128)] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[rgb(46,77,138)] transition-colors">
                  Chọn file
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-gray-500 text-sm mt-2">Hỗ trợ: PDF, JPG, PNG (tối đa 5MB)</p>
              </div>
              
              {files.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium text-gray-700 mb-2">Tài liệu đã tải lên ({files.length})</h3>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <PaperClipIcon className="h-5 w-5 text-gray-500 mr-2" />
                          <span className="truncate">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Thông tin bổ sung */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
            <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 flex items-center">
              <InformationCircleIcon className="h-5 w-5 text-[rgb(36,67,128)] mr-2" />
              <h2 className="text-lg font-semibold text-[rgb(36,67,128)]">Thông tin bổ sung (nếu có)</h2>
            </div>
            <div className="p-6">
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(36,67,128)]"
                placeholder="Nhập thông tin bổ sung (nếu có)"
              ></textarea>
            </div>
          </div>
          
          {/* Điều khoản và xác nhận */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-8">
            <div className="bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-[rgb(36,67,128)] mr-2" />
              <h2 className="text-lg font-semibold text-[rgb(36,67,128)]">Xác nhận thông tin</h2>
            </div>
            <div className="p-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <ExclamationCircleIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-yellow-700">Lưu ý quan trọng</p>
                    <p className="text-yellow-600">Vui lòng kiểm tra kỹ thông tin trước khi gửi yêu cầu. Sau khi gửi, bạn sẽ không thể chỉnh sửa thông tin.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="acceptTerms" className="text-gray-700">
                    Tôi xác nhận thông tin trên là chính xác và đồng ý với <a href="#" className="text-[rgb(36,67,128)] hover:underline">điều khoản dịch vụ</a> <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.acceptTerms && <p className="text-red-500 text-sm error-message">{errors.acceptTerms}</p>}
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptPrivacy"
                    name="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onChange={handleInputChange}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="acceptPrivacy" className="text-gray-700">
                    Tôi đồng ý với <a href="#" className="text-[rgb(36,67,128)] hover:underline">chính sách bảo mật</a> và cho phép xử lý thông tin cá nhân <span className="text-red-500">*</span>
                  </label>
                </div>
                {errors.acceptPrivacy && <p className="text-red-500 text-sm error-message">{errors.acceptPrivacy}</p>}
              </div>
            </div>
          </div>
          
          {/* Submit button */}
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="!px-8 !py-3 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang xử lý...
                </>
              ) : (
                'Gửi yêu cầu'
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && renderSuccessModal()}
    </div>
  );
};

export default ServiceUse;