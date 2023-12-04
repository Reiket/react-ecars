import React from 'react';
import Title from "../../shared/components/Title/Title";
import GreenButton from "../../shared/components/GreenButton/GreenButton";

const CheckEmail: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <Title text={"auth__title"} classnames={"Forgot password"}/>
                    </div>
                    <div className="auth__text">We sent a password reset link to user777@gmail.com</div>
                    <form className="auth__form">
                        <GreenButton href={"https://mail.google.com/"} classnames={"auth__button green-button_big"} text={"Open email app"} type={"link"}/>
                    </form>
                    <div className="auth__content">Didn't receive the email? <a href={"/"} >Click to resend</a></div>
                </div>
            </div>
        </section>
    );
};

export default CheckEmail;