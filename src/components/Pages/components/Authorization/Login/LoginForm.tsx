import React from 'react';
import Label from "../../../../../shared/components/Form/Label/Label";
import {Link} from "react-router-dom";
import GreenButton from "../../../../../shared/components/GreenButton/GreenButton";

const LoginForm = () => {
    return <form className="auth__form">
        <Label name={"Email address"} classnames={"label"}>
            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
        </Label>
        <Label classnames={"label"}>
            <div className="auth__forgot">
                <span>Password</span>
                <Link to="/" className="auth__link">Forgot password?</Link>
            </div>
            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
        </Label>
        <GreenButton classnames={"auth__button green-button_big"} text={"Login"} type={"button"}/>
    </form>
};

export default LoginForm;