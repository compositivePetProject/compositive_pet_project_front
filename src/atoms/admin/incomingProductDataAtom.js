import { atom } from "recoil";

export const incomingProductDataState = atom({
    key: "incomingProductDataState",
    default: {
        productIncomingStockId: 0,
        productId: 0,
        productSizeCategoryId: 0,
        productIncomingStockCount: 0
    }
});