import instance from "../utils/instance"

export const getCommunityBoardAllRequest = async () => {
    const response = await instance.get("/community/getboards");
    return response.data;
}


