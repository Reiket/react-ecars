import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {TSubscribeForm} from "../types/card-subscribe.types";
import Label from "../../../../../../../shared/components/forms/Form/Label/Label";
import Input from "../../../../../../../shared/components/forms/Form/Input/Input";
import {emailValidator} from "../../../../../../../shared/utils/validators";
import Form from "../../../../../../../shared/components/forms/Form";
import Button from "../../../../../../../shared/components/buttons/GreenButton/Button";

const SubscribeForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<TSubscribeForm>();
    const onSubmit: SubmitHandler<TSubscribeForm> = (data) => {
        console.log(data)
    }
    return <Form name={"card-subscribe"} onSubmit={handleSubmit(onSubmit)}>
        <Label errors={errors.email?.message}>
            <Input<TSubscribeForm> name={"email"} register={register} rules={emailValidator}/>
        </Label>
        <Button size={"big"} type={"button"} classnames={"card-subscribe__button"}>Subscribe</Button>
    </Form>
};

export default SubscribeForm;