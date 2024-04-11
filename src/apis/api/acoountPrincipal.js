import instance from "../utils/instance"

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const authNicknameEditRequest = async (data) => {
    return await instance.put("/account/edit/nickname", data);
}