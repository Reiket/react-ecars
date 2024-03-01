import React from 'react';
import {LogoType} from "./types/logo.types";

const Logo: React.FC<LogoType> = ({classnames}) => (
    <a href={"/"} className={classnames}>
        <img src="assets/image/logo-site/logo.svg" alt="Logo"/>
    </a>
);

export default Logo;