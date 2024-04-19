import React from 'react';
import {PForm} from "./types/forms.types";



const Form: React.FC<PForm> = ({children, name, onSubmit}) => {
    return <form noValidate onSubmit={onSubmit} className={`${name}__form`}>
        {children}
    </form>
};

export default Form;