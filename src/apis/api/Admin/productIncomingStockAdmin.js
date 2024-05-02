import instance from "../../utils/instance";

export const updateProductIncomingStocktoProductStock = async (data) => {
    return await instance.put(`/admin/incoming/stock/check`, data);
}

export const postProductIncomingStockRequest = async (data) => {
    return await instance.post("/admin/incoming/stock", data)
}

export const updateProductIncomingStockAdminRequest = async (data) => {
    return await instance.put(`/admin/incoming/stock/${data.productIncomingStockId}`, data);
}

export const deleteProductIncomingStocksAdminRequest = async (data) => {
    return await instance.delete("/admin/incoming/stocks", {data});
}

export const getProductInocmingStocksRequest = async (params) => {
    return await instance.get("/admin/incoming/stocks", {params})
}

export const getProductIncomingAdminCountRequest = async (params) => {
    return await instance.get("/admin/incoming/stocks/count", {params})
}