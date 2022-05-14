import axiosClient from "./axiosClient";

interface LoginData {
    email: string;
    password: string;
    remember: boolean
};
interface RegisterData {
    email: string;
    password: string;
    userName: string
};

interface DataLoginResponse {
    accessToken: string;
}
interface LoginResponse {
    isSucces: boolean;
    data?: DataLoginResponse;
}

export const authAction = {
    login: async (payload: LoginData) => {
        const url = '/login'
        const { data } = await axiosClient.post<LoginResponse>(url, { ...payload })
        return data
    },
    register: (data: RegisterData) => {
        const url = '/register'
        return axiosClient.post(url, { ...data })
    }
}
