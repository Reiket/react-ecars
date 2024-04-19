import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TSubscribeForm} from "../types/card-subscribe.types";
import Label from "../../../../../../../shared/components/forms/Form/Label/Label";
import Input from "../../../../../../../shared/components/forms/Form/Input/Input";
import GreenButton from "../../../../../../../shared/components/buttons/GreenButton/GreenButton";
import {emailValidator} from "../../../../../../../shared/utils/validators";
import Form from "../../../../../../../shared/components/forms/Form";

const SubscribeForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TSubscribeForm>();
    const onSubmit: SubmitHandler<TSubscribeForm> = (data) => {
        console.log(data)
    }
    return <Form name={"card-subscribe"} onSubmit={handleSubmit(onSubmit)}>
        <Label errors={errors.email?.message}>
            <Input<TSubscribeForm> name={"email"} register={register} rules={emailValidator}/>
        </Label>
        <GreenButton classnames={"card-subscribe__button green-button_big"} text={"Subscribe"}
                     type={"button"}/>
    </Form>
};

export default SubscribeForm;