import instance from "../utils/instance";

export const getCommunityBoardAdminRequest = async () => {
    const response = await instance.get("/community/admin/boards");
    return response.data;
}