import instance from "../utils/instance";

export const getProductsAdminRequest = async (params) => {
    return await instance.get("/product/admin/products", {params});
}

export const getProductsAdminCountRequest = async (params) => {
    const response = await instance.get("/product/admin/products/count", {params});
    return response;
}

export const updateProductAdminRequest = async (data) => {
    return await instance.put(`/product/admin/product/${data.productId}`, data);
}

export const deleteProductsAdminRequest = async (data) => {
    return await instance.delete("product/admin/products", {data});
}

export const getProductIncomingStocksAdminRequest = async () => {
    const response = await instance.get("/product/admin/incoming/stocks");
    return response;
}

export const getProductStocksAdminRequest = async (params) => {
    const response = await instance.get("/product/admin/stocks", {params});
    return response;
}

export const getProductStocksCountAdminRequest = async (params) => {
    return await instance.get("/product/admin/stocks/count", {params});
}

export const getProductOrderDetailsADminRequest = async () => {
    const response = await instance.get("/product/admin/order/detail");
    return response;
}

export const getProductOutgoingStocksAdminRequest = async (params) => {
    const response = await instance.get("/product/admin/outgoing/stocks", {params});
    return response;
}

export const getProductOutgoingAdminCountRequest = async (params) => {
    const response = await instance.get("/product/admin/outgoing/count", {params});
    return response;
}

export const postProductAdminRequest = async (data) => {
    return await instance.post("/product/admin/product", data);
}

export const postProductIncomingStockRequest = async (data) => {
    return await instance.post("/product/admin/incoming/stock", data)
}

export const getProductInocmingStocksRequest = async (params) => {
    return await instance.get("/product/admin/incoming/stocks", {params})
}

export const getProductIncomingAdminCountRequest = async (params) => {
    return await instance.get("/product/admin/incoming/stocks/count", {params})
}

export const updateProductIncomingStockAdminRequest = async (data) => {
    return await instance.put(`/product/admin/incoming/stock/${data.productIncomingStockId}`, data);
}

export const deleteProductIncomingStocksAdminRequest = async (data) => {
    return await instance.delete("/product/admin/incoming/stocks", {data});
}

export const postProductCurrentStockRequest = async (data) => {
    return await instance.post("/product/admin/stock", data)
}

export const updateProductCurrentStockRequest = async (data) => {
    return await instance.put(`/product/admin/stock/${data.productStockId}`, data);
}

export const getOrderProductsRequest = async (params) => {
    return await instance.get("/product/admin/order/detail", {params});
}

export const getOrderProductsCountRequest = async (params) => {
    return await instance.get("/product/admin/order/count", {params});
}

