import { atom } from "recoil";

export const incomingProductDataState = atom({
    key: "incomingProductDataState",
    default: {
        productIncomingStockId: 0,
        productId: 0,
        productNameKor: "",
        productSizeCategoryId: 0,
        productSizeCategoryName: "",
        productIncomingStockCount: 0
    }
});