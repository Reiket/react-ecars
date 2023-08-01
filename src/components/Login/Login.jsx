import React from 'react';

const Login = () => {
    return (
        <section className="section__login login">
            <div className="login__container">
                <div className="login__body">
                    <h2 className="login__title title">Login</h2>
                    <form className="login__form">
                        <label className="login__label">
                            <span>Email address</span>
                            <input type="email" className="login__input" placeholder={"example@mail.com"}/>
                        </label>
                        <label className="login__label">
                            <div className="login__forgot">
                                <span>Password</span>
                                <a href="/" className="login__link">Forgot password?</a>
                            </div>
                            <input type="email" className="login__input" placeholder={"example@mail.com"}/>
                        </label>
                        <button className="login__button green-button green-button_big">Login</button>
                    </form>
                    <div className="login__content">Don’t have an account? <a href={"/"}>Sign Up</a></div>
                    <div className="login__or">or</div>
                    <button className="login__authorize">
                        <img src="/assets/image/icons/login/google.svg" alt="Login"/>
                        Authorize with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;