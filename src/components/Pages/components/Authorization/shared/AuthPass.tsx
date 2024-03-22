import React from 'react';
import {IoEye} from "react-icons/io5";
import {IoMdEyeOff} from "react-icons/io";
import {TAuthPass} from "./types/auth-pass.types";


const AuthPass: React.FC<TAuthPass> = ({passType, onClickToPassword, children}) => {
    return <>
        <div className={"password-input"}>
            {children}
            <button type={'button'} onClick={onClickToPassword}
                    className={"password-input__btn"}>{passType === "password" ?
                <IoEye/> : <IoMdEyeOff/>}</button>
        </div>
    </>
};

export default AuthPass;