import React from "react";


const useStickyHeader = () => {
    const [isSticky, setIsSticky] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsSticky(prevScrollPos > currentScrollPos && currentScrollPos !== 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return {isSticky, prevScrollPos};
}

export default useStickyHeader;
