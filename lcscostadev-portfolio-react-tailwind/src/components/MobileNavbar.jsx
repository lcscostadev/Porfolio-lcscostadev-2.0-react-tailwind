import React, { useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../constants/index';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex items-center gap-2 justify-center lg:hidden'>
            <img src={isOpen ? close : menu} alt="menu" className=' xl:flex w-[30px] z-50 ' onClick={() => setIsOpen((prev) => !prev)} />
            <div className={`${isOpen ? 'flex' : 'hidden'} p-6 absolute bg-white top-[100px] left-0 right-0 my-2 w-[430px] border-y-2`}>
                <ul>
                    {navLinks.map((nav, index) => (
                        <li key={index}>
                            <a href={`#${nav.id}`} onClick={() => onClick(() => setIsOpen(false))}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default MobileNavbar;