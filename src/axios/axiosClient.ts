import { getLocalStorage, setLocalStorageToken } from './../helpers/localStorage';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY, REFRESH_TOKEN_LOCAL_STORAGE_KEY } from '../constant/common';
import { authAction } from './authAction';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_DOMAIN,
    headers: {
        'content-type': 'application/json',
    }

});



axiosClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const accessToken = getLocalStorage(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
        console.log('request');
        if (accessToken && config.headers) {
            config.headers['x-access-token'] = accessToken;
        }
        return config;
    },
    (error: AxiosError) => {
        console.log('axios error ', error);
    }
);
axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log('response ', response);
        return response;
    },
    async (error: AxiosError) => {
        if (error.response?.status === 401) {
            // const config = error.response.config;
            const refreshToken = getLocalStorage(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
            const { data } = await axios.post(`${process.env.REACT_APP_API_DOMAIN}/refresh-token`, { refreshToken });
            console.log("🚀 ~ data", data);
            setLocalStorageToken(data.accessToken, ACCESS_TOKEN_LOCAL_STORAGE_KEY);
            if (error.response.config.headers) {
                error.response.config.headers['x-access-token'] = data.accessToken;
                console.log('header ', error.response.config);
                return axiosClient(error.response.config);
            }
            return '';
        }
        return error.response;
    }
);




export default axiosClient;