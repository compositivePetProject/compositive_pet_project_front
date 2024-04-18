import { atom } from "recoil";

export const currentProductDataState = atom({
    key: "currentProductDataState",
    default: {
        productStockId: 0,
        productId: 0,
        productSizeCategoryId: 0,
        productStockCount: 0
    }
});