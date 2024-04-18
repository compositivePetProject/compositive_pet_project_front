import instance from "../utils/instance"

// 임시로 추가함.
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const getCommunityBoardListRequest = async () => {
    const response = await instance.get("/community/getboards");
    return response.data
}


export const getCommunityBoardRequest = async (params) => {
    return await instance.get("/community/page/{boardId}", (params));
}


export const postCommunityBoardRequest = async (data) => {
    return await instance.post("/community/board/write", (data));
}


export const deleteCommunityBoardListRequest = async (data) => {
    return await instance.delete("/community/delete/list", (data))
}

export const deleteCommunityBoardRequest = async (params) => {
    return await instance.delete("/community/delete")
}

export const getCommunityBoardDogRequest = async (data) => {
    const response = await instance.get("/community/board/dog");
    return response.data;

}

