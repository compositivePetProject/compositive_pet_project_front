import { atom } from "recoil";

export const productAdminIncomingStockSelectedAtom = atom({
    key : "productAdminIncomingStockSelectedAtom",
    default : {
        productIncomingStockId : 0,
        productId : 0,
        productNameKor : "",
        productSizeCategoryId : 0,
        productSizeCategoryName : "",
        productSizeCategoryNameKor : "",
        productIncomingStockCount : 0
    }
})