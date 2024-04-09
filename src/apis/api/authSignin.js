import instance from "../utils/instance"

export const authSigninRequest = async (data) => {
    const response = await instance.post("/auth/sign-in", data);
    return response;
}
