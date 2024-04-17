import instance from "../utils/instance"

export const getAllProductTypeRequest = async () => {
    return await instance.get("/product/option/types");
}

export const getAllCategoryRequest = async () => {
    return await instance.get("/product/option/categories");
}