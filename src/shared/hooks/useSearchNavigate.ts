import {createSearchParams, useNavigate} from "react-router-dom";

export const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname: string, params: { currency: number }) =>
        navigate(`${pathname}?${createSearchParams(params)}`);
};