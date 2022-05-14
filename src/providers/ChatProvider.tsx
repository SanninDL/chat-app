import React, { createContext, useState } from "react";

interface User {
  email: string;
  displayName: string;
  avatar: string;
  id: string;
}
interface DataLoginResponse {
  accessToken: string;
}
interface LoginResponse {
  isSucces: boolean;
  data?: DataLoginResponse;
}
interface ChatContextType {
  user: LoginResponse | null;
  setUser: React.Dispatch<React.SetStateAction<LoginResponse | null>>;
}
export const chatContext = createContext<ChatContextType | null>(null);

export default function ChatProvider(props: any) {
  const [user, setUser] = useState<LoginResponse | null>(null);

  const chatContextValue: ChatContextType = { user, setUser };
  return (
    <chatContext.Provider value={chatContextValue}>
      {props.children}
    </chatContext.Provider>
  );
}
