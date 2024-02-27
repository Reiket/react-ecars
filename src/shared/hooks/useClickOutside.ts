import React, {RefObject} from 'react';
export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && event.target) {
                if (!ref.current.contains(event.target as Node)) {
                    callback();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};