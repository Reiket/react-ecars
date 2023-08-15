import React from 'react';

const CheckEmail = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <h2 className="auth__title title">Forgot password</h2>
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