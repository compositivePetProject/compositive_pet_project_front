import instance from "../utils/instance";

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}


export const postCommunityBoardViewRequest = async (data) => {
    return await instance.post("community/view" , (data))
}


export const getCommunityBoardViewRequest = async (params) => {
    return await instance.get("community/view" , {params})
}
