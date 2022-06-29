import { createTheme } from "@mui/material";

const messageStyleLight = {
  messageBg: '#0a80ff',
  reciveMessageBg: 'rgb(235, 235, 235)',
  messageTextColor: '#fff',
  reciveMessageTextColor: '#212529'
};

const messageStyleDark = {
  messageBg: '#0a80ff',
  reciveMessageBg: '#293145',
  messageTextColor: '#fff',
  reciveMessageTextColor: 'rgba(255,255,255,0.75)'
};


declare module '@mui/material' {
  interface Theme {
    custom: ThemeValueProps;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: ThemeValueProps;
  }
}

export const darkTheme = createTheme({
  custom: {
    color: 'rgba(255,255,255,0.75)',
    borderColor: '#293145',
    bgColor: '#1a2236',
    textGray: 'rgba(255,255,255,0.4)',
    tabColor: 'rgba(255,255,255,0.7)',
    tabActiveBg: '#0a80ff',
    tabActiveColor: 'rgba(255,255,255,.7)',
    inputColor: 'rgba(255,255,255,.7)',
    inputBorder: '#e6e6e6',
    roomActiveBg: '#1f273b',
    ...messageStyleDark
  }
});

export const lightTheme = createTheme({
  custom: {
    color: '#212529',
    textGray: '#6c757d',
    borderColor: '#ebebeb',
    bgColor: '#fff',
    tabColor: '#000',
    tabActiveBg: '#e6e6e6',
    tabActiveColor: '#0a80ff!important',
    inputColor: '#495057',
    inputBorder: '#e6e6e6',
    roomActiveBg: '#f0f0f0',
    ...messageStyleLight
  }
});