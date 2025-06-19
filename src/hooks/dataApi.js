import { useQuery } from "@tanstack/react-query";
import dataApi from "../api/dataApi";

// Hook để lấy toàn bộ dữ liệu
const useGlobalData = () => {
  return useQuery({
    queryKey: ["globalData"],
    queryFn: dataApi,
    // staleTime: Infinity,
  });
};

export default useGlobalData;