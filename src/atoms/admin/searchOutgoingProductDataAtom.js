import { atom } from "recoil";

export const searchOutgoingProductDataState = atom({
    key: "searchOutgoingProductDataState",
    default: {
        productId: 0,
        productCategoryId: 0,
        productAnimalCategoryId: 0,
        productSizeCategoryId: 0,
        productNameKor: "",
    }
});