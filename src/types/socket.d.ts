declare interface SendMessagePayload {
    senderId: number;
    roomId: number;
    messageText: string;
}

declare interface RecieMessageData {
    messageText: string;
}


declare interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void; c;
    message: (data: Message) => void;
}

declare interface ClientToServerEvents {
    hello: () => void;
    message: (payload: SendMessagePayload) => void;
}