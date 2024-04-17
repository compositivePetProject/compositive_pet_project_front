import instance from "../utils/instance";

export const getProductsAdminRequest = async () => {
    const response = await instance.get("/product/admin/products");
    return response;
}

export const getProductIncomingStocksAdminRequest = async () => {
    const response = await instance.get("/product/admin/incoming/stocks");
    return response;
}

export const getProductStocksAdminRequest = async () => {
    const response = await instance.get("/product/admin/stocks");
    return response;
}

export const getProductOrderDetailsADminRequest = async () => {
    const response = await instance.get("/product/admin/order/detail");
    return response;
}

export const getProductOutgoingStocksAdminRequest = async () => {
    const response = await instance.get("/product/admin/outgoing/stocks");
    return response;
}

export const postProductAdminRequest = async (data) => {
    return await instance.post("/product/admin/product", data);
}

export const postProductIncomingStockRequest = async (data) => {
    return await instance.post("/product/admin/incoming/stock", data)
}

export const getProductInocmingStocksRequest = async (params) => {
    return await instance.get("/product/admin/incoming/stocks/test", {params})
}

