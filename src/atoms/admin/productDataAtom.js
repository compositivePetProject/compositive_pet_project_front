import { atom } from "recoil";

export const productDataState = atom({
    key: "productDataState",
    default: {
        productId: 0,
        productCategoryId: 0,
        productAnimalCategoryId: 0,
        productNameKor: "",
        productPrice: 0,
        productImageUrl: "",
        productBoardContent: ""
    }
});