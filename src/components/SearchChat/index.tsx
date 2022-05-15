import React, { useState } from "react";
import { CustomTextField } from "../../helpers/globalStyles";
import useThemeContext from "../../hooks/useThemeContext";

export const SearchChat = () => {
  const [text, setText] = useState<string>("");
  const theme = useThemeContext();

  console.log("text ", text);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div style={{ padding: "18px 30px" }}>
      <CustomTextField
        theme={theme}
        type='text'
        fullWidth
        onChange={handleSearch}
        placeholder='Search Chats'
      />
    </div>
  );
};
