import axiosClient from "./axiosClient";


interface RoomRespone {
    isSuccess: boolean;
    msg: string;
    data: {
        rooms: Room[];
    };
}

export const chatAction = {
    getRooms: (userId: string) => {
        const url = `/api/rooms/${userId}`;
        return axiosClient.get<RoomRespone>(url);
    }
};