import React from 'react';
import {Title} from "../../../../../shared/components/Title/Title";
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
    return <section className="section__auth auth">
        <div className="auth__container">
            <div className="auth__body">
                <Title tag={"h1"} text={"Login"} classnames={"auth__title page-title"}/>
                <LoginForm/>
                <p className="auth__content text">Don’t have an account? <Link to={"/"}>Sign Up</Link></p>
                <p className="auth__or">or</p>
                <button className="auth__authorize">
                    <img src="/assets/image/icons/login/google.svg" alt="Login"/>
                    Authorize with Google
                </button>
            </div>
        </div>
    </section>
};

export default Login;