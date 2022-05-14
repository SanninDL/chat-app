import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'content-type': 'application/json',
    }

})


// axiosClient.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         console.log('request ', config)
//         return config
//     },
//     (error: AxiosError) => {
//         console.log('axios error ', error)
//     }
// )



export default axiosClient