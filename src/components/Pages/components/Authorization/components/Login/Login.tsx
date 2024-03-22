import React from 'react';
import LoginForm from "./LoginForm";
import Auth from "../../Auth";
import AuthBottom from "../../shared/AuthBottom";

const Login: React.FC = () => {
    return <Auth title={"Login"}>
        <LoginForm/>
        <AuthBottom link={"/register"} title={"Sign Up"}/>
    </Auth>
};

export default Login;