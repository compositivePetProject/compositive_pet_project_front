import instance from "../utils/instance"

export const getAdoptDog = async () => {
    const response = await instance.get("/adoptation/board/dog");
    return response.data;
}
