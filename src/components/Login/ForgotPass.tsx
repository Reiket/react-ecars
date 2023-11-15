import React from 'react';
import {FaArrowLeftLong} from "react-icons/fa6";

const ForgotPass: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <h2 className="auth__title title">Forgot password</h2>
                    </div>
                    <div className="auth__text">No worries, we'll send you reset instructions.</div>
                    <form className="auth__form">
                        <label className="auth__label">
                            <span>Email address</span>
                            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
                        </label>
                        <button className="auth__button green-button green-button_big">Reset password</button>
                    </form>
                    <div className="auth__content"><a href={"/"} className={"auth_link"} ><FaArrowLeftLong/> Back to login</a></div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPass;