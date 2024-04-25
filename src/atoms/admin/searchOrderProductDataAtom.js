import { atom } from "recoil";

export const searchOrderProductDataState = atom({
    key: "searchOrderProductDataState",
    default: {
        productId: 0,
        productSizeCategoryId: 0,
        productNameKor: "",
    }
});