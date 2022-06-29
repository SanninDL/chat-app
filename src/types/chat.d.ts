declare interface Room {
    roomId: number;
    roomName: string;
    adminId: number;
    createdAt: Date;
    roomAvatar: string,
    unReadMessages: Message[];
    lastMessage: Message;
}

declare interface Message {
    messageId: number;
    roomId: number;
    messageText: string;
    createdAt: Date;
    isRead: number;
    sender: {
        userId: number;
        avatar: string;
        displayName: string;
    };
}

//chat form
declare interface ChatFormValue {
    messageText: string;
    messageFile: string;
}

