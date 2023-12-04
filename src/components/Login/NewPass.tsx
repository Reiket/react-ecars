import React from 'react';
import Title from "../../shared/components/Title/Title";
import GreenButton from "../../shared/components/GreenButton/GreenButton";

const NewPass: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <Title text={"Set a new password"} classnames={"auth__title"}/>
                    </div>
                    <div className="auth__text">Your new password must be different from your previously used passwords.</div>
                    <form className="auth__form">
                        <label className="auth__label">
                            <span>New password</span>
                            <input type="password" className="auth__input" placeholder={"New password"}/>
                        </label>
                        <label className="auth__label">
                            <span>Confirm password</span>
                            <input type="password" className="auth__input" placeholder={"Confirm password"}/>
                        </label>
                        <GreenButton classnames={"auth__button green-button_big"} text={"Reset password"} type={"button"}/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewPass;