import axiosClient from "./axiosClient";

interface LoginData {
    email: string;
    password: string;
};
interface LoginAccessData {
    accessToken: string;
}
interface RegisterData {
    email: string;
    password: string;
    userName: string;
};




export const authAction = {
    login: async (payload: LoginData) => {
        const url = '/login';
        const { data } = await axiosClient.post<LoginResponse | LoginFailed>(url, { ...payload });
        return data;
    },
    loginWithAccessToken: async (payload: LoginAccessData) => {
        const url = '/login-with-access-token';
        const { data } = await axiosClient.post<LoginTokenResponse | LoginFailed>(url, { ...payload });
        return data;
    },
    register: (data: RegisterData) => {
        const url = '/register';
        return axiosClient.post(url, { ...data });
    }
};
