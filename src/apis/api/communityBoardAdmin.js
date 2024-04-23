import instance from "../utils/instance";

// 임시로 추가함.
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}


export const getCommunityBoardAdminRequestById = async (communityNoticeId) => {
    const response = await instance.get("/community/admin/${communityNoticeId}",{communityNoticeId});
    return response.data
}

export const getCommunityBoardAdminListRequest = async () => {
    const response = await instance.get("/community/admin/list/boards")
    return response.data
}

export const postCommunityBoardRequest = async (data) => {
    return await instance.post("/community/admin/noticewrite", (data))

}