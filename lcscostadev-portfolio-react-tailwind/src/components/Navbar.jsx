import React, { useState } from 'react';
import { Logo, close, menu } from '../assets';
import { navLinks } from '../constants/index';

const Navbar = () => {

    const [navScroll, setNavScroll] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleScrolling = () => {
        if (window.scrollY > 80) {
            setNavScroll(true);
        } else {
            setNavScroll(false);
        }
    }

    window.addEventListener("scroll", handleScrolling);

    const toRomanNumeral = (num) => {
        const romanNumeralMap = [
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];

        let result = '';

        romanNumeralMap.forEach((item) => {
            while (num >= item.value) {
                result += item.symbol;
                num -= item.value;
            }
        });

        return result;
    };

    return (
        <>
            <header className={`${navScroll ? 'py-2 bg-[#18181C] transition-all ease-in-out duration-500' : 'bg-[#1F1F23] py-4 transition-all ease-in-out duration-300'} flex items-center justify-between px-10 fixed top-0 left-0 right-0`}>
                <img src={Logo} alt="" className='w-[70px]' />
                <nav className='lg:flex items-center gap-8 text-lg hidden'>
                    {navLinks.map((nav, index) => (
                        <li key={index} className="list-none">
                            <span className='text-[#00ff7f]'>
                                {`${toRomanNumeral(index + 1)}.`}
                            </span>
                            <a href={`#${nav.id}`} className="text-white ">
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <button className='text-white border-[1px] py-2 px-4 rounded-lg border-[#00ff7f] flex items-center gap-2'>Resume <ion-icon name="download-outline"></ion-icon></button>
                </nav>

                {/* Navbar Mobile Version */}

                <div className='flex items-center gap-2 justify-center lg:hidden'>
                    <img src={toggle ? close : menu} alt="menu" className=' xl:flex w-[30px] z-50 ' onClick={() => setToggle((prev) => !prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute bg-white top-[100px] left-0 right-0 my-2 w-[430px] border-y-2`}>
                        <ul>
                            {navLinks.map((nav, index) => (
                                <li key={index}>
                                    < a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Navbar;