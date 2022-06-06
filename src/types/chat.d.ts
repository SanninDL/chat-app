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
    userId: number;
    messageText: string;
    createdAt: Date;
    isRead: number;
}