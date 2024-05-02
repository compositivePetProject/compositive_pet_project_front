import instance from "../../utils/instance";

export const updateProductIncomingStocktoProductStock = async (data) => {
    return await instance.put(`/admin/incoming/stock/check`, data);
}