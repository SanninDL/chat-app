import React from "react";
import { CustomTextField } from "../../styles/globalStyles";

export const SearchChat = () => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div style={{ padding: "18px 30px" }}>
      <CustomTextField
        sx={{ marginBottom: "0px" }}
        type='text'
        fullWidth
        onChange={handleSearch}
        placeholder='Search Chats'
      />
    </div>
  );
};
