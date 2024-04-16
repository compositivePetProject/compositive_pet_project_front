import instance from "../utils/instance";

export const getCommunityBoardDogRequest = async () => {
    const response = await instance.get("/community/board/dog");
    return response.data;

}