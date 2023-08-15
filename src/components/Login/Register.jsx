import React from 'react';
import {BsCheck} from "react-icons/bs";

const Register = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <h2 className="auth__title title">Sing up</h2>
                    <form className="auth__form">
                        <label className="auth__label">
                            <span>Full name</span>
                            <input type="text" className="auth__input" placeholder={"John Doe"}/>
                        </label>
                        <label className="auth__label">
                            <span>Email address</span>
                            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
                        </label>
                        <label className="auth__label">
                            <div className="auth__forgot">
                                <span>Password</span>
                            </div>
                            <input type="password" className="auth__input" placeholder={"Your password"}/>
                        </label>
                        <label className="auth__label">
                            <div className="auth__forgot">
                                <span>Confirm password</span>
                            </div>
                            <input type="password" className="auth__input" placeholder={"Re-type password"}/>
                        </label>
                        <label className="auth__label">
                            <div className="checkbox">
                                <input id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox"
                                       value="1" name="form[]"/>
                                <label htmlFor="c_1" className="checkbox__label"><BsCheck className={"checkbox__check"}/><span
                                    className="checkbox__text">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></span></label>
                            </div>
                        </label>
                        <button className="auth__button green-button green-button_big">Sign Up</button>
                    </form>
                    <div className="auth__content">Already have an account?<a href={"/"}> Login</a></div>
                    <div className="auth__or">or</div>
                    <button className="auth__authorize">
                        <img src="/assets/image/icons/login/google.svg" alt="Login"/>
                        Authorize with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;