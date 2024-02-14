import axios from "axios";

export const instance = axios.create({
    baseURL: 'react-server/api/1.0/',
});