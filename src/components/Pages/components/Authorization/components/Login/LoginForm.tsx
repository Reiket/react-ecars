import React from 'react';
import {Link} from "react-router-dom";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {SubmitHandler, useForm} from "react-hook-form";
import { TLoginForm } from './types/login.types';
import {usePathType} from "../../shared/hooks/usePathType";
import Label from "../../../../../../shared/components/forms/Form/Label/Label";
import Input from "../../../../../../shared/components/forms/Form/Input/Input";
import AuthPass from "../../shared/AuthPass";
import {emailValidator, passwordLoginValidator} from "../../../../../../shared/utils/validators";

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