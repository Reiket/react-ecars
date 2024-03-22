import React from 'react';
import Label from "../../../../../../shared/components/Form/Label/Label";
import {Link} from "react-router-dom";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {SubmitHandler, useForm} from "react-hook-form";
import Input from "../../../../../../shared/components/Form/Input/Input";
import {emailValidator, passwordLoginValidator} from "../../../../../../shared/utils/validators";
import {TLoginForm} from "./types/login.types";
import {usePathType} from "../../shared/hooks/usePathType";
import AuthPass from "../../shared/AuthPass";

const LoginForm = () => {
    const {register, reset, handleSubmit, formState:{errors}} = useForm<TLoginForm>({
        mode: "onChange"
    });
    const onSubmit: SubmitHandler<TLoginForm> = (data) => {
        console.log(data);
        reset()
    }
    const {passType, onClickToPassword} = usePathType();
    return <form noValidate onSubmit={handleSubmit(onSubmit)} className="auth__form login-form">
        <Label name={"Email address"} errors={errors.email?.message}>
            <Input<TLoginForm> type={"email"} name={"email"} register={register} placeholder={"Write your email"} rules={emailValidator}/>
        </Label>
        <Label  errors={errors.password?.message}>
            <div className="login-form__forgot">
                <span>Password</span>
                <Link to="/forgot" className="login-form__link">Forgot password?</Link>
            </div>
            <AuthPass onClickToPassword={onClickToPassword} passType={passType}>
                <Input<TLoginForm> type={passType} name={"password"} register={register} placeholder={"Write your password"}
                                   rules={passwordLoginValidator}/>
            </AuthPass>
        </Label>
        <GreenButton classnames={"auth__button green-button_big"} text={"Login"} type={"button"}/>
    </form>
};

export default LoginForm;