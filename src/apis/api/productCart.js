import instance from "../utils/instance"

export const postProductCartAddRequest = async (data) => {
    return await instance.post("/product/cart", (data));
}

export const getProductCartListRequest = async (params) => {
    return await instance.get("/product/carts", { params });
}