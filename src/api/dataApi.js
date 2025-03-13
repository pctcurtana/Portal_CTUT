import axios from "axios";

const dataApi = async () => {
  try {
    const response = await axios.get("https://dichvucong.ctuet.edu.vn/api/thongtincanhansinhvien/012345678912", {
      headers: {
        "Authorization": "Bearer Qx5qPUypI3PirIKtugyfoAXDV44iLEHjFL5BejAzo1MaBmGW2xcrIHM1xI43iWW1"
      },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách:", error);
    throw error; 
  }
};

export default dataApi;