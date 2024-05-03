import { atom } from "recoil";


export const selectedCurrentProductData = atom({
    key: "selectedCurrentProductData",
    default: {
        productStockId: 0,
        productId: 0,
        productSizeCategoryId: 0,
        productStockCount: 0
    }
})