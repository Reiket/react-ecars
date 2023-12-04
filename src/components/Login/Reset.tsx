import React from 'react';
import Title from "../../shared/components/Title/Title";
import GreenButton from "../../shared/components/GreenButton/GreenButton";

const Reset: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <Title text={"Password has been reset"} classnames={"Password has been reset"}/>
                    </div>
                    <div className="auth__text">Your password has been successfully reset. Click the button below to log in.</div>
                    <form className="auth__form">
                        <GreenButton classnames={"auth__button green-button_big"} text={"Login"} type={"button"}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reset;