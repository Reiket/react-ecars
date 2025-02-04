import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {TFormForgotPass} from "./types/forgot-pass.types";
import Auth from "../../Auth";
import Label from "../../../../../../shared/components/forms/Form/Label/Label";
import Input from "../../../../../../shared/components/forms/Form/Input/Input";
import GreenButton from "../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {Link} from "react-router-dom";
import {FaArrowLeftLong} from "react-icons/fa6";
import {emailValidator} from "../../../../../../shared/utils/validators";
import Text from "../../../../../../shared/components/Title/Text";


const ForgotPass: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TFormForgotPass>({
        mode: "onChange"
    })
    const onSubmit: SubmitHandler<TFormForgotPass> = (data) => {
        console.log(data)
    }
    return <Auth title={"Forgot password"}>
        <Text classnames={"auth__text"} text={"No worries, we'll send you reset instructions."}/>
        <form noValidate onSubmit={handleSubmit(onSubmit)} className="auth__form">
            <Label name={"Email address"} errors={errors.email?.message}>
                <Input<TFormForgotPass> type={"email"} name={"email"} register={register} placeholder={"Your Email!"} rules={emailValidator}/>
            </Label>
            <GreenButton classnames={"auth__button green-button_big"} text={"Reset password"} type={"button"}/>
        </form>
        <p className="auth__content"><Link to={"/login"} className={"auth_link"}><FaArrowLeftLong/> Back to login</Link></p>
    </Auth>
};

export default ForgotPass;