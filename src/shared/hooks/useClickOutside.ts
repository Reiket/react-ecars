import React from 'react';
type RefType = React.MutableRefObject<HTMLButtonElement | HTMLDivElement | null>;

export const useClickOutside = (ref: RefType, callback: (e: MouseEvent) => void) => {
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (ref.current && !ref.current.contains(target)) {
                callback(event);
            }
        }
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, [ref, callback]);
}
