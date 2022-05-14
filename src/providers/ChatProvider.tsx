import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

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
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  tabActive: number;
  setTabActive: Dispatch<SetStateAction<number | 0>>;
}
export const chatContext = createContext<ChatContextType | null>(null);

export default function ChatProvider(props: any) {
  const [user, setUser] = useState<LoginResponse | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [tabActive, setTabActive] = useState<number>(0);

  const chatContextValue: ChatContextType = {
    user,
    setUser,
    darkMode,
    setDarkMode,
    tabActive,
    setTabActive
  };
  return (
    <chatContext.Provider value={chatContextValue}>
      {props.children}
    </chatContext.Provider>
  );
}
