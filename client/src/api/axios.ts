import axios from "axios";

export default axios.create({
    baseURL: process.env.EXPRESS_APP_BACKEND_URL,
    withCredentials: true
})