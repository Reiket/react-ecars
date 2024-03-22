import React from "react";

export const usePathType = () => {
    const [passType, setPassType] = React.useState("password")
    const onClickToPassword = () => {
        setPassType((prevState) => prevState === "password" ? "text" : "password");
    };
    return {passType, onClickToPassword}
}