import React from 'react';
import {TAuthProps} from "./types/auth.types";
import {Title} from "../../../../shared/components/Title/Title";

const Auth: React.FC<TAuthProps> = ({children, title}) => {
    return <section className="section__auth auth">
        <div className="auth__container">
            <div className="auth__body">
                <Title tag={"h1"} text={title} classnames={"auth__title page-title"}/>
                {children}
            </div>
        </div>
    </section>
};

export default Auth;