import instance from "../utils/instance"

// 임시로 추가함.
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const postCommunityBoardRequest = async (data) => {
    return await instance.post("/community/board/write", (data));
}

export const postCommunityBoardLikeRequest = async (data) => {
    return await instance.post("/community/favorite")
}

export const getCommunityBoardListRequest = async () => {
    const response = await instance.get("/community/getboards");
    return response.data
}

export const getCommunityBoardRequestById = async (params) => {
    return await instance.get("/community/board", { params });
}

export const getMyCommunityBoardWriteList = async (params) => {
    return await instance.get("/community/board/mylist", { params })
}

export const getCommunityBoardPageRequest = async (params) => {
    return await instance.get("/community/board/page", { params });
}

export const getCommunityBoardPageCountRequest = async (params) => {
    return await instance.get("/community/board/count", { params });
}

export const getBoardDogPageCountRequest = async (params) => {
    return await instance.get("/community/board/dog/count/page", { params })
}

export const getBoardCatPageCountRequest = async (params) => {
    return await instance.get("/community/board/cat/count/page", { params })
}

export const getBoardMyPageCountRequest = async (params) => {
    return await instance.get("/community/board/count/mypage", { params })
}


export const getCommunityBoardDogRequest = async (data) => {
    const response = await instance.get("/community/board/dog");
    return response.data;
}

export const getCommunityBoardCatRequest = async (data) => {
    const response = await instance.get("/community/board/cat");
    return response.data;
}

export const getCommunityBoardLikeStatusRequest = async (params) => {
    return await instance.get("/community/favorite", { params })
}

export const getCommunityBoardLikeCountRequest = async (params) => {
    return await instance.get("/community/favorite/count", { params })
}

export const putCommunityBoardRequest = async (data) => {
    return await instance.put("/community/board/update", (data))

}

export const deleteCommunityBoardListRequest = async (data) => {
    return await instance.delete("/community/delete/list", (data))
}

export const deleteCommunityBoardRequestById = async (params) => {
    return await instance.delete(`/community/delete/board/${params}`);
}

export const deleteCommunityBoardLikeRequest = async (data) => {
    return await instance.delete("/community/delete/favorite", { data })
}

