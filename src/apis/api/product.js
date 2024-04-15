import instance from "../utils/instance";

export const getProductsRequest = async () => {
   return await instance.get("/product/");
}

export const getProductPageRequest = async (params) => {
   return await instance.get("/product/page", {params});
}

export const getProductRequest = async (params) => {
   return await instance.get("/product/one", {params});
}

