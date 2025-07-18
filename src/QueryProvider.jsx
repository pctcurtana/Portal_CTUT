import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dataApi from "./api/dataApi";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity, // 5 phút
            cacheTime: Infinity, // 10 phút
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

// Prefetch data khi ứng dụng khởi động
const prefetchGlobalData = async () => {
    await queryClient.prefetchQuery({
        queryKey: ["globalData"],
        queryFn: dataApi,
    });
};

// Gọi hàm prefetch
prefetchGlobalData();

const QueryProvider = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

export default QueryProvider;