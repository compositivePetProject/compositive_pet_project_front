import instance from "../utils/instance"

export const getAdoptAll = async () => {
    const response = await instance.get("/adoptation/board");
    return response.data;
}
