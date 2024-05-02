import instance from "../../utils/instance";

export const getProductOutgoingStocksAdminRequest = async (params) => {
    const response = await instance.get("/admin/outgoing/stocks", {params});
    return response;
}

export const getProductOutgoingAdminCountRequest = async (params) => {
    const response = await instance.get("/admin/outgoing/count", {params});
    return response;
}