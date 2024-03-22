import React from 'react';
import AuthBottom from "../../shared/AuthBottom";
import Auth from "../../Auth";
import RegisterForm from "./RegisterForm";


const Register: React.FC = () => {
    return <Auth title={"Sign Up"}>
        <RegisterForm/>
        <AuthBottom link={"/login"} title={"Login"}/>
    </Auth>
};

export default Register;