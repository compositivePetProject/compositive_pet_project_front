import instance from "../../utils/instance";

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

export const getProductOrderDetailsADminRequest = async () => {
    const response = await instance.get("/product/admin/order/detail");
    return response;
}

export const postProductAdminRequest = async (data) => {
    return await instance.post("/product/admin/product", data);
}

export const postProductCurrentStockRequest = async (data) => {
    return await instance.post("/product/admin/stock", data)
}