import React from 'react';
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";
type LoaderPropsType = {
    classnames: string
}
const Loader: React.FC<LoaderPropsType> = ({classnames}) => {
    return (
        <ReactLoading
            className={classnames}
            type={"bars"}
            color={"#03fc4e"}
            height={100}
        />
    );
}
export default Loader;