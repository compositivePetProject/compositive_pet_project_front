import instance from "../utils/instance";

// 임시로 추가함.
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}


export const getCommunityBoardAdminRequestById = async (params) => {
    return await instance.get("/community/admin",{params});

}

export const getCommunityBoardAdminListRequest = async () => {
    const response = await instance.get("/community/admin/list/boards")
    return response.data
}

export const postCommunityBoardAdminRequest = async (data) => {
    return await instance.post("/community/admin/noticewrite", (data))

}

export const deleteCommunityBoardAdminById = async (params) => {
    return await instance.delete(`/community/delete/admin/${params}`)
}

export const updateCommunityBoardAdminByIdRequest = async (data) => {
    return await instance.put("/community/update/admin", (data))
}