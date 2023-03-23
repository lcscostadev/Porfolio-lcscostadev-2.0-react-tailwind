import React from 'react';
import { navLinks } from '../constants/index';
// import { toRumanNumeral } from '../utils/ToRomanNumeral';

const About = () => {

    const aboutLink = navLinks.find(link => link.id === 'about');

    return (
        <>
            <section id='about'>
                <span></span>
                <h1 className='text-2xl text-white'>{aboutLink.title}</h1>
            </section>
        </>
    );
}

export default About;