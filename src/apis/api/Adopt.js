import instance from "../utils/instance"

export const getAdoptAll = async () => {
    const response = await instance.get("/adoptation/board");
    return response.data;
}

export const getAdoptDog = async () => {
    const response = await instance.get("/adoptation/board/dog");
    return response.data;
}

export const getAdoptCat = async () => {
    const response = await instance.get("/adoptation/board/cat");
    return response.data;
}

export const getAdoptById = async (boardId) => {
    const response = await instance.get(`/adoptation/board/${boardId}`)
    return response.data;
}

export const postAdoptRequest = async (data) => {
    return await instance.post("/adoptation/board",data)
}

export const getAdoptAdmin = async () => {
    const response = await instance.get("/adoptation/admins")
    return response.data
}

export const getAdoptAdminById = async (noticeId) => {
    const response = await instance.get(`/adoptation/admin/${noticeId}`)
    return response.data
}

export const getAdoptCount = async (params) => {
    const response = await instance.get('/adoptation/board/count', {params});
    return response;
}

export const getAdoptDogCount = async (params) => {
    const response = await instance.get('/adoptation/board/dogCount', {params});
    return response;
}


export const getAdoptByUserId = async (params) => {
    const response = await instance.get('/adoptation/board/user', {params});
    return response;
}

export const getAdoptCountByUserId = async (params) => {
    const response = await instance.get('/adoptation/board/userCount', {params});
    return response;
}

export const deleteAdoptBoardById = async (params) => {
   
    return await instance.delete('/adoptation/board', {params})
}


export const postAdoptLike = async (data) => {
    const response = await instance.post('/adoptation/favorite',data);
}


export const getAdoptLikeCount = async (params) => {
    const response = await instance.get("adoptation/favorite/board", {params})
}

export const deleteAdoptLike = async (params) => {
    const response = await instance.delete("/adoptation/favorite",{params});
}
