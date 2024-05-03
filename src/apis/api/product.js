import instance from "../utils/instance";

export const getProductsRequest = async () => {
   return await instance.get("/product/");
}

export const getProductPageRequest = async (params) => {
   return await instance.get("/product/page", { params });
}

export const getProductRequest = async (params) => {
   return await instance.get("/product/one", { params });
}

export const getProductsSearchCountRequest = async (params) => {
   return await instance.get("/product/count", { params });
}

export const getProductsFavoritesRequest = async (params) => {
   return await instance.get("/product/favorites/count", { params });
}

export const getProductFavoriteStatusRequest = async (params) => {
   return await instance.get("/product/like", { params });
}

export const postProductFavoriteRequest = async (data) => {
   return await instance.post("/product/favorite", (data));
}

export const deleteProductFavoriteRequest = async (data) => {
   return await instance.delete("/product/favorite/delete", { data });
}

