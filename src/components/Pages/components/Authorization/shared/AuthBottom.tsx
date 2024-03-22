import React from 'react';
import {Link} from "react-router-dom";
type TAuthBottomProps = {
    link: string
    title: string
}
const AuthBottom: React.FC<TAuthBottomProps> = ({link, title}) => {
    return <div className={"auth__bottom bottom-auth"}>
        <p className="bottom-auth__content">Already have an account?<Link to={link}>{title}</Link></p>
        <p className="bottom-auth__or">or</p>
        <button className="bottom-auth__authorize">
            <img src="/assets/image/icons/login/google.svg" alt="Goggle"/>
            Authorize with Google
        </button>
    </div>
};

export default AuthBottom;