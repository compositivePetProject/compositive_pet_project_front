import instance from "../utils/instance"

export const authSignupRequest = async (data) => {
    try {
        const response = instance.post("/auth/sign-up", data);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const oAuth2SignupRequest = async (data) => {
    return await instance.post("/auth/oauth2/sign-up", data);
}


export const authNicknameCheckRequest = async (data) => {
    return await instance.post("/auth/nickname-check", data);
}

export const usernameCheckRequest = async (data) => {
    return await instance.post("/auth/username-check", data);
}



