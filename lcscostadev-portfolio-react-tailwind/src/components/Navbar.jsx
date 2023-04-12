import React from 'react';
import { toRomanNumeral } from '../utils/toRomanNumeral';
import { Logo, Button, ScrollHandler, MobileNavbar } from './index';
import { LogoImg } from '../assets';
import { navLinks } from '../constants/index';

const Navbar = () => {

    return (
        <>
            <ScrollHandler>
                <Logo src={LogoImg} width="70px" />
                <nav className='lg:flex items-center gap-8 text-lg hidden'>
                    {navLinks.map((nav, index) => (
                        <li key={index} className="list-none">
                            <span className='text-[#00ff7f]'>
                                {`${toRomanNumeral(index + 1)}.`}
                            </span>
                            <a href={`#${nav.id}`} className="text-white hover:text-[#00ff7f] transition ease-in-out duration-500">
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <Button text="Resume" icon={<ion-icon name="download-outline"></ion-icon>} />
                </nav>

                {/* Navbar Mobile Version */}
                <MobileNavbar />
            </ScrollHandler>


        </>
    );
}

export default Navbar;