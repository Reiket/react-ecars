import axios from "axios";
import {config} from "../../shared/utils/config";

export const instance = axios.create({
    baseURL: config.apiUrl,
});

