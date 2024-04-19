export type GreenBtnPropsType = {
    classnames: string;
    text: string;
    type: "button" | "link";
    href?: string;
    onClick?: () => void
};