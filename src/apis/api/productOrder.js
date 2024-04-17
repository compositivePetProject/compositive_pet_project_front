import instance from "../utils/instance"

export const postProductOrderRequest = async (data) => {
    return await instance.post("/product/order", (data));
}