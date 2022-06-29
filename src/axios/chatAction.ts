import axiosClient from "./axiosClient";


interface RoomRespone {
    isSuccess: boolean;
    msg: string;
    data: {
        rooms: Room[];
    };
}
interface GetAllMessagesResonse {
    isSuccess: boolean;
    msg: string;
    data: {
        messages: Message[];
    };
}

export const chatAction = {
    getRooms: (userId: number) => {
        const url = `/api/rooms/${userId}`;
        return axiosClient.get<RoomRespone>(url);
    },
    getMessages: (roomId: number) => {
        const url = `api/messages/${roomId}`;
        return axiosClient.get<GetAllMessagesResonse>(url);
    }
};