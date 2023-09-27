import React from 'react';
import {useParams} from "react-router-dom";

const Scroll = () => {
    const pathname = useParams();
    React.useEffect(() => {
        window.scrollTo(0 , 0);
    }, [pathname])
    return null;
};

export default Scroll;