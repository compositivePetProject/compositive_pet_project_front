import instance from "../utils/instance"

//
export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const nicknameAndProfileImageUrlEditRequest = async (data) => {
    return await instance.put("/account/edit/nickname/profileImg", data);
}

export const passwordEditRequest = async (data) => {
    return await instance.put("/account/edit/password", data);
}