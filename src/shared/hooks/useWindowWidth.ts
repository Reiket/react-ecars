import React from "react";


export const useWindowWidth = (threshold: number) => {
    const [isBelowThreshold, setIsBelowThreshold] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsBelowThreshold(window.innerWidth < threshold);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [threshold]);

    return isBelowThreshold;
};