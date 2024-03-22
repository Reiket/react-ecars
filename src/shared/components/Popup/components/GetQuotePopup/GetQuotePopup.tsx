import React from 'react';
import Popup from "../../Popup";
import GreenButton from "../../../GreenButton/GreenButton";
import {actions} from "../../../../../components/Layout/store/actions/layout-actios";
import {useAppDispatch, useAppSelector} from "../../../../../app/store/hooks";
import {selectIsOpenGetPopup} from "../../../../../components/Layout/store/selectors/layout-selector";
import usePopupControl from "../../../../hooks/usePopupControl";
import {SubmitHandler, useForm} from "react-hook-form";
import Label from "../../../Form/Label/Label";
import {Inputs} from "./types/get-quote.types";
import {brandsValidator, emailValidator, nameValidator, shipToValidator} from "../../../../utils/validators";
import {
    selectBrands
} from "../../../../../components/Pages/components/Home/components/Brands/store/selector/brands-selector";
import {
    BrandsType
} from "../../../../../components/Pages/components/Home/components/Brands/store/types/brands-reducer.types";
import Input from "../../../Form/Input/Input";
import {shipItem} from "../../../../../components/Layout/components/Header/types/header.types";
import Select from "../../../Form/Select/Select";
import {Title} from "../../../Title/Title";
import {fetchBrands} from "../../../../../components/Pages/components/Home/components/Brands/store/thunks/fetchBrand";
import {TFields} from "../../../Form/types/form.types";

const GetQuotePopup: React.FC = () => {
    const isOpenPopup = useAppSelector(selectIsOpenGetPopup)
    const brands = useAppSelector(selectBrands)
    const dispatch = useAppDispatch()
    const shipTo = shipItem.map((item) => ({value: item.country || "", label: item.country || ""}))
    const brandsOptions = brands.map((item: BrandsType) => ({ value: item.name || "", label: item.name || "" }));
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
    React.useEffect(() => {
        dispatch(fetchBrands())
    }, [])
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