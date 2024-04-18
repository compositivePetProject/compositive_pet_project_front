import { atom } from "recoil";

export const selectedProductData = atom({
    key: "selectedProductData",
    default: {
        productId: 0,
        productCategoryId: 0,
        productAnimalCategoryId: 0,
        productNameKor: "",
        productPrice: 0,
        productImageUrl: ""
    }
});