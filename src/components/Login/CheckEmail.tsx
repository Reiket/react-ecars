import React from 'react';
import Title from "../Shared/components/Title";

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
                        <a href={"https://mail.google.com/"} className="auth__button green-button green-button_big">Open email app</a>
                    </form>
                    <div className="auth__content">Didn't receive the email? <a href={"/"} >Click to resend</a></div>
                </div>
            </div>
        </section>
    );
};

export default CheckEmail;