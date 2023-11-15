import React from 'react';

const Reset: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <h2 className="auth__title title auth__title_reset">Password has been reset</h2>
                    </div>
                    <div className="auth__text">Your password has been successfully reset. Click the button below to log in.</div>
                    <form className="auth__form">
                        <a href={"/"} className="auth__button green-button green-button_big">Login</a>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Reset;