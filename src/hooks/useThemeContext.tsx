import { useContext } from "react";
import { darkTheme, lightTheme } from "../helpers/theme";
import { chatContext } from "../providers/ChatProvider";

export default function useThemeContext() {
  const store = useContext(chatContext);

  return store?.darkMode ? darkTheme : lightTheme;
}
