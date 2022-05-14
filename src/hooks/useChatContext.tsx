import { useContext } from "react";
import { chatContext } from "../providers/ChatProvider";

export default function useChatContext() {
  const store = useContext(chatContext);
  return { ...store };
}
