import instance from "../utils/instance"

export const postProductCartAddRequest = async (data) => {
    return await instance.post("/product/cart", (data));
}