export { };

declare global {

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
    }
    interface ThemeProps {
        theme?: ThemeValueProps;
    }
}
