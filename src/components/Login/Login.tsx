import React from 'react';
import Title from "../Shared/components/Title";

const Login: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <Title text={"Login"} classnames={"auth__title"}/>
                    <form className="auth__form">
                        <label className="auth__label">
                            <span>Email address</span>
                            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
                        </label>
                        <label className="auth__label">
                            <div className="auth__forgot">
                                <span>Password</span>
                                <a href="/" className="auth__link">Forgot password?</a>
                            </div>
                            <input type="email" className="auth__input" placeholder={"example@mail.com"}/>
                        </label>
                        <button className="auth__button green-button green-button_big">Login</button>
                    </form>
                    <div className="auth__content">Don’t have an account? <a href={"/"}>Sign Up</a></div>
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

export default Login;