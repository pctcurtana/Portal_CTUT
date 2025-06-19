import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDataApi } from "../api/dataApi"; // hàm gọi api để cập nhật dữ liệu

const useUpdateData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDataApi, //hàm update dữ liệu
    onSuccess: () => {
      queryClient.invalidateQueries(["globalData"]); //cập nhật cache sau khi update
    },
  });
};

export default useUpdateData;