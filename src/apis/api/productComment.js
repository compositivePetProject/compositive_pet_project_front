import instance from "../utils/instance";

export const postProductCommentRequest = async (data) => {
    return await instance.post("/product/comment", (data));
}

export const getProductReviewsRequest = async (params) => {
    return await instance.get("/product/comments-user", { params });
}

export const getProductReviewsByProductIdRequest = async (params) => {
    return await instance.get("/product/comments", { params });
}

export const getProductReviewsPageRequest = async (params) => {
    return await instance.get("/product/comments/page", { params });
}

export const getProductReviewsCountRequest = async (params) => {
    return await instance.get("/product/comments/count", { params });
}

export const deleteProductReviewRequest = async (data) => {
    return await instance.delete("/product/comment/delete", { data })
}

export const putProductReviewRequest = async (data) => {
    return await instance.put("/product/comment/update", data);
}