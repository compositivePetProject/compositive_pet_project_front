import { atom } from "recoil";

export const searchCurrentProductDataState = atom({
    key: "searchCurrentProductDataState",
    default: {
        productId: 0,
        productCategoryId: 0,
        productAnimalCategoryId: 0,
        productSizeCategoryId: 0,
        productNameKor: "",
    }
});