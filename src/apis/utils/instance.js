import axios from "axios";
import getServerAddress from "../../constants/serverAddress";

export const instance = axios.create({
    baseURL: "https://" + getServerAddress(),
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});

export default instance;