import React from 'react';
import useGlobalData from '../../hooks/dataApi';

const Test = () => {
  const { data, isLoading, error } = useGlobalData();
  const hktt = data?.data?.json_hktt;

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(36,67,128)]"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">
            Lỗi: {error.message || 'Không thể tải dữ liệu sinh viên'}
          </p>
        </div>
      </div>
    </div>
  );

  if (!data) return (
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
      <p className="text-sm text-yellow-700">Không có dữ liệu để hiển thị</p>
    </div>
  );

  // Phân tích dữ liệu và tạo cấu trúc hiển thị
  return (
    <div>
      <h2>Test load data api</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
        {JSON.stringify(hktt, null, 2)}
      </pre>
      {console.log(data)}
    </div>
  );
};

export default Test;
