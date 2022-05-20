import {useEffect, useState} from "react";

/**
 * its a custom hook for clients device size recognition
 * @returns {boolean} - it returns whether the clients device size is less than 768px
 */
export function useWindowSize(): boolean {
    /**
     * @property {number} windowWidth it is a state holding clients device width
     */
    const [windowWidth, setWindowWidth] = useState<number>(0);
    useEffect(() => {
        /**
         * it gets the device size
         */
        function handleResize() {
            setWindowWidth(window.innerWidth ?? 0);
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (windowWidth < 768);
}