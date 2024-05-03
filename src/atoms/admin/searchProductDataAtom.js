import { atom } from "recoil";

export const searchProductDataState = atom({
    key: "searchProductDataState",
    default: {
        productId: 0,
        productCategoryId: 0,
        productAnimalCategoryId: 0,
        productNameKor: "",
    }
});