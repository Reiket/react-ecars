import React from 'react';
import Popup from "../../Popup";
import GreenButton from "../../../buttons/GreenButton/GreenButton";
import {actions} from "../../../../../components/Layout/store/actions/layout-actios";
import {useAppSelector} from "../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../components/Layout/store/selectors/layout-selector";
import usePopupControl from "../../../../hooks/usePopupControl";
import {SubmitHandler, useForm} from "react-hook-form";
import {Inputs} from "./types/get-quote.types";
import {brandsValidator, emailValidator, nameValidator, shipToValidator} from "../../../../utils/validators";
import {shipItem} from "../../../../../components/Layout/components/Header/types/header.types";

import {Title} from "../../../Title/Title";
import {Brands} from "../../../../../app/api/types/brands.types";
import {
    brandsSelector
} from "../../../../../components/Pages/components/Home/components/Brands/store/selectors/brands-selectors";
import {TFields} from "../../../forms/Form/types/form.types";
import Label from "../../../forms/Form/Label/Label";
import Select from "../../../forms/Form/Select/Select";
import Input from "../../../forms/Form/Input/Input";

const GetQuotePopup: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const brands = useAppSelector(brandsSelector)
    const shipTo = shipItem.map((item) => ({value: item.country || "", label: item.country || ""}))
    const brandsOptions = brands.map((item: Brands) => ({ value: item.attributes.name || "", label: item.attributes.name || "" }));
    const {ref} = usePopupControl(isOpenPopup, actions.toggleIsOpenGetPopup);
    const {register, reset, control, handleSubmit, formState:{errors}} = useForm<Inputs>({
        mode: "onChange"
    });

    const inputFields = [
        { name: "email", placeholder: "Your email", rules: emailValidator },
        { name: "name", placeholder: "Your name", rules: nameValidator},
        { name: "brands", placeholder: "Select brand...", rules: brandsValidator, items: brandsOptions },
        { name: "shipTo", placeholder: "Select ship to...", rules: shipToValidator, items: shipTo }
    ] as TFields<Inputs>[];

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset()
    }
    return <Popup  isOpenPopup={isOpenPopup}>
        <div ref={ref} className="get-quote">
            <Title tag={"h2"} classnames={"home-title"} text={"Get a quote"}/>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="get-quote__form">
                {inputFields.map((field, index) => (
                    <Label key={index} name={field.name} errors={errors[field.name]?.message}>
                        {field.items ? (
                            <Select
                                placeholder={field.placeholder}
                                name={field.name}
                                control={control}
                                items={field.items}
                                rules={field.rules}
                            />
                        ) : (
                            <Input
                                placeholder={field.placeholder}
                                name={field.name}
                                register={register}
                                rules={field.rules}
                            />
                        )}
                    </Label>
                ))}
                <GreenButton classnames={"get-quote__btn"} text={"Send"} type={"button"}/>
            </form>
        </div>
    </Popup>
};

export default GetQuotePopup;