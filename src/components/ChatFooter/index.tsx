import AttachmentIcon from "@mui/icons-material/Attachment";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  CustomButton,
  CustomButtonPrimary,
  CustomTextField,
} from "../../styles/globalStyles";
import { ChatFooterWrap, ChatForm } from "./styled";

interface ChatFooterProps {
  onSubmitFunc: (value: ChatFormValue) => void;
}

export const ChatFooter = ({ onSubmitFunc }: ChatFooterProps) => {
  const { control, handleSubmit, reset } = useForm<ChatFormValue>({
    defaultValues: {
      messageText: "",
      messageFile: "",
    },
  });

  const onSubmit: SubmitHandler<ChatFormValue> = (value) => {
    console.log("submit ", value);
    onSubmitFunc(value);
  };
  return (
    <ChatFooterWrap>
      <ChatForm onSubmit={handleSubmit(onSubmit)}>
        <CustomButton>
          <EmojiEmotionsIcon />
        </CustomButton>
        <Controller
          name='messageText'
          control={control}
          render={({ field }) => (
            <CustomTextField
              sx={{ marginLeft: "16px" }}
              {...field}
              type='text'
              placeholder='Write a message'
            />
          )}
        />
        <Controller
          name='messageFile'
          control={control}
          render={(props) => {
            return (
              <CustomButton>
                <AttachmentIcon sx={{ transform: "rotate(-45deg)" }} />
              </CustomButton>
            );
          }}
        />
        <CustomButtonPrimary variant='contained' type='submit'>
          <SendIcon />
        </CustomButtonPrimary>
      </ChatForm>
    </ChatFooterWrap>
  );
};
