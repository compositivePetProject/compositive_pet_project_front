import instance from "../utils/instance"

export const postProductOrderRequest = async (data) => {
    return await instance.post("/product/order", (data));
}

export const postProductOrderCartsRequest = async (data) => {
    return await instance.post("/product/order/cars", (data));
}

export const getProductOrderRequest = async (params) => {
    return await instance.get("/product/order", { params });
}
export const getProductOrdersRequest = async (params) => {
    return await instance.get("/product/orders", { params });
}

export const deleteProductOrderRequest = async (data) => {
    return await instance.delete("/product/order", { data })
}

export const putProductOrderRequest = async (data) => {
    return await instance.put("/product/order", data);
}


