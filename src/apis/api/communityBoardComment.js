import instance from "../utils/instance";

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const postCommunityBoardCommentRequest = async (data) => {
    return await instance.post("/community/comment", (data))
}

export const getCommunityBoardCommentByBoardIdRequest = async (params) => {
    return await instance.get("/community/comments", {params})
}

export const getCommunityBoardCommentByUserIdRequest = async (params)=> {
    return await instance.get("/community/user/comment", {params})
}

export const deleteCommunityBoardCommentRequest = async (commentId) => {
    return await instance.delete(`/community/delete/comment/${commentId}`)
}

export const putCommunityBoardCommentRequest = async (data) => {
    return await instance.put("/community/update/comment", (data))
}

