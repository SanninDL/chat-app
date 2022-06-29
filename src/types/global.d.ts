export { };

declare global {
    // THEME
    interface ThemeValueProps {
        color: string;
        borderColor: string;
        bgColor: string;
        textGray: string;
        tabColor: string;
        tabActiveBg: string;
        tabActiveColor: string;
        inputColor: string;
        inputBorder: string;
        messageBg: string;
        reciveMessageBg: string;
        messageTextColor: string;
        reciveMessageTextColor: string;
        roomActiveBg: string;
    }
    interface ThemeProps {
        theme?: ThemeValueProps;
    }

    //global style 
    interface FlexBoxProps {
        alignItems?: string;
        justifyContent?: string;
        gap?: string;
    }

    // Chat



    // axios 

}
