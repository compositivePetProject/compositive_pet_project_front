import instance from "../utils/instance"

export const getAdoptAll = async () => {
    const response = await instance.get("/adoptation/board");
    return response.data;
}

export const getAdoptDog = async () => {
    const response = await instance.get("/adoptation/board/dog");
    return response.data;
}

export const getAdoptById = async (boardId) => {
    const response = await instance.get(`/adoptation/board/${boardId}`)
    return response.data;
}

export const postAdopt = async (data) => {
    return await instance.post("/adoptation/board", data);
}
