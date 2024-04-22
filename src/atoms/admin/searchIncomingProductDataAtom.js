import { atom } from "recoil";

export const searchIncomingProductDataState = atom({
    key: "searchIncomingProductDataState",
    default: {
        productId: 0,
        productSizeCategoryId: 0,
        productNameKor: "",
    }
});