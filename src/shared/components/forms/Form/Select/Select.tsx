import React from 'react';
import ReactSelect from "react-select";
import {Controller} from "react-hook-form";
import {TSelect} from "./types/select.types";
import {TOptions} from "../types/form.types";
import {animatedComponents, selectTheme} from "./utils/select-utils";


const Select: React.FC<TSelect> = ({control, rules, placeholder, items, name}) => {
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
                    theme={selectTheme}
                    className={"select"}
                    components={animatedComponents}
                    value={getValue(value)}
                    options={items}
                    C
                    onChange={newValue => onChange((newValue as TOptions).value)}
                />
            )}
        />
    };

    export default Select;