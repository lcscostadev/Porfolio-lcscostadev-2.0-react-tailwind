import React, { useState } from 'react';

const ScrollHandler = ({ children }) => {
    const [navScroll, setNavScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    return (
        <div className={`${navScroll ? 'py-2 bg-[#18181C] transition-all ease-in-out duration-500' : 'bg-[#1F1F23] py-4 transition-all ease-in-out duration-300'} flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-40`}>
            {children}
        </div>
    );
}

export default ScrollHandler;