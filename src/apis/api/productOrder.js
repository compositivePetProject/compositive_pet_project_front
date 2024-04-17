import instance from "../utils/instance"

export const postProductOrderRequest = async (data) => {
    return await instance.post("/product/order", (data));
}

export const getProductOrdersRequest = async (params) => {
    return await instance.get("/product/orders", { params });
}

