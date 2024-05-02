import instance from "../../utils/instance";

export const getOrderProductsRequest = async (params) => {
    return await instance.get("/admin/order", {params});
}

export const getOrderProductsCountRequest = async (params) => {
    return await instance.get("/admin/order/count", {params});
}
