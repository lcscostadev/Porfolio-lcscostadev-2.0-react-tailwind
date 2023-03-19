import React, { useState } from 'react';
import { Logo } from '../assets';
import { navLinks } from '../constants/index';

const Navbar = () => {
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
            <header className='bg-[#18181C] flex items-center justify-between px-10 '>
                <img src={Logo} alt="" className='w-[70px]' />
                <nav className='flex gap-8'>
                    {navLinks.map((nav, index) => (
                        <li key={index} className="list-none">
                            <span className='text-[#00ff7f]'>
                                {`${toRomanNumeral(index + 1)}.`}
                            </span>
                            <a href={`${nav.id}`} className="text-white text-lg">
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </nav>
            </header>
        </>
    );
}

export default Navbar;