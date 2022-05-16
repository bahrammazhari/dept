import {useEffect, useState} from "react";

export function useWindowSize():boolean {
    const [windowWidth, setWindowWidth] = useState<number>( 0);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth??0);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (windowWidth<768);
}