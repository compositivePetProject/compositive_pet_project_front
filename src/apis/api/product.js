import instance from "../utils/instance";

export const getProductsRequest = async () => {
   return await instance.get("/product/");
}

export const getProductRequest = async (params) => {
   return await instance.get("/product/one", {params});
}