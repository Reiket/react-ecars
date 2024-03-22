import React from 'react';
import ReactSelect, {Theme} from "react-select";
import {Controller} from "react-hook-form";
import makeAnimated from "react-select/animated";
import {TOptions, TSelect} from "./types/select.types";

const theme = (theme: Theme) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary25: "#232323",
        neutral50: "#A3A3A3",
    }
});
const Select: React.FC<TSelect> = ({control, rules, placeholder, items, name}) => {
    const animatedComponents = makeAnimated();
    const getValue = React.useMemo(() => (value: string) => {
        return value ? items.find((option) => option.value === value) : ''
    }, [items]);

    return  <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field: {onChange, value} }) => (
            <ReactSelect
                placeholder={placeholder}
                theme={theme}
                className={"select"}
                components={animatedComponents}
                value={getValue(value)}
                options={items}
                classNamePrefix={"select"}
                onChange={newValue => onChange((newValue as TOptions).value)}
            />
        )}
    />
};

export default Select;