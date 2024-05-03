import instance from "../../utils/instance";

export const updateProductCurrentStockRequest = async (data) => {
    return await instance.put(`/admin/stock/${data.productStockId}`, data);
}

export const getProductStocksAdminRequest = async (params) => {
    const response = await instance.get("/admin/stocks", {params});
    return response;
}

export const getProductStocksCountAdminRequest = async (params) => {
    return await instance.get("/admin/stocks/count", {params});
}