import instance from "../utils/instance"

// 임시로 추가함.
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const getCommunityBoardListRequest = async () => {
    const response = await instance.get("/community/getboards");
    return response.data
}


export const getCommunityBoardRequestById = async (params) => {
    return await instance.get("/community/board", {params});
}


export const postCommunityBoardRequest = async (data) => {
    return await instance.post("/community/board/write", (data));
}


export const deleteCommunityBoardListRequest = async (data) => {
    return await instance.delete("/community/delete/list", (data))
}

export const deleteCommunityBoardRequestById = async (params) => {
    return await instance.delete(`/community/delete/board/${params}`);
}

export const getCommunityBoardDogRequest = async (data) => {
    const response = await instance.get("/community/board/dog");
    return response.data;
}

export const getCommunityBoardCatRequest = async (data) => {
    const response = await instance.get("/community/board/cat");
    return response.data;
}


export const putCommunityBoardRequest = async (data) => {
    return await instance.put ("/community/update/board/{boardId}")
    

}
