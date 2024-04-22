import instance from "../utils/instance";

export const getProductsAdminRequest = async (params) => {
    const response = await instance.get("/product/admin/products", {params});
    return response;
}

export const getProductsAdminCountRequest = async (params) => {
    const response = await instance.get("/product/admin/products/count", {params});
    return response;
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

export const postProductCurrentStockRequest = async (data) => {
    return await instance.post("/product/admin/stock", data)
}

export const getOrderProductsRequest = async (params) => {
    return await instance.get("/product/admin/order/detail", {params});
}

