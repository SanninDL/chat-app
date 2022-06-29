
declare interface DataLoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}
declare interface LoginResponse {
    isSuccess: boolean;
    data: DataLoginResponse;
}
declare interface LoginFailed {
    isSuccess: boolean;
    data: null;
}
interface TokenResData {
    user: User;
}
declare interface LoginTokenResponse {
    isSuccess: boolean,
    data: TokenResData;
}

//Login, Register Form 
declare interface FormValues {
    email: string;
    password: string;
}
declare interface User {
    email: string;
    userName: string;
    avatar: string;
    userId: number;
}