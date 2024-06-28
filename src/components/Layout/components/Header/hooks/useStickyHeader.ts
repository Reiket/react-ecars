import React from "react";


const useStickyHeader = () => {
    const [isSticky, setIsSticky] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isSticky;
}

export default useStickyHeader;
