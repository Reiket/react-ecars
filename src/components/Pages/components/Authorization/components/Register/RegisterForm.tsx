import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TRegisterForm} from "./types/register.types";
import Label from "../../../../../../shared/components/Form/Label/Label";
import Input from "../../../../../../shared/components/Form/Input/Input";
import {checkboxValidator, passwordConfirmedValidator} from "../../../../../../shared/utils/validators";
import {BsCheck} from "react-icons/bs";
import GreenButton from "../../../../../../shared/components/GreenButton/GreenButton";
import {usePathType} from "../../shared/hooks/usePathType";
import AuthPass from "../../shared/AuthPass";
import {formFields, passwordFields} from "./utils/register-form";
import {Link} from "react-router-dom";

const RegisterForm = () => {
    const {register, handleSubmit, getValues, formState: {errors}} = useForm<TRegisterForm>({
        mode: "onChange"
    })
    const onSubmit: SubmitHandler<TRegisterForm> = (data) => {
        console.log(data)
    }
    const {passType, onClickToPassword} = usePathType();
    return <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
        {formFields.map(field =>
            <Label key={field.name} name={field.label} errors={errors[field.name]?.message}>
                <Input<TRegisterForm> name={field.name} register={register} placeholder={field.placeholder}
                                      rules={field.rules}/>
            </Label>)}
        {passwordFields.map(field =>
            <Label key={field.name} name={field.label} errors={errors[field.name]?.message}>
            <AuthPass onClickToPassword={onClickToPassword} passType={passType}>
                <Input<TRegisterForm> type={passType} name={field.name} register={register} placeholder={field.placeholder}
                                      rules={field.name === "confirmedPassword" ? passwordConfirmedValidator(getValues) : field.rules}/>
            </AuthPass>
        </Label>)}
        <Label classnames={"auth__label"} errors={errors.isAgree?.message}>
            <div className="checkbox">
                <Input id={"c_1"} classnames={"checkbox__input"} type={"checkbox"} name={"isAgree"} register={register}
                       rules={checkboxValidator}/>
                <Label htmlFor={"c_1"} classnames={"checkbox__label"}>
                    <BsCheck className={"checkbox__check"}/>
                    <p className="checkbox__text">
                        I agree to the
                        <Link className={"checkbox__link"} to={"/terms"}>{"\nTerms of Service\n"}</Link>
                        and <Link className={"checkbox__link"} to={"/privacy"}>{"\nPrivacy Policy\n"}</Link>
                    </p>
                </Label>
            </div>
        </Label>
        <GreenButton classnames={"auth__button green-button_big"} text={"Sign Up"} type={"button"}/>
    </form>
};

export default RegisterForm;