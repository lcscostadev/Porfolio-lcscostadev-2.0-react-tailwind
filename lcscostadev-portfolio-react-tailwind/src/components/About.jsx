import React from 'react';
import { navLinks } from '../constants/index';
import { toRomanNumeral } from '../utils/toRomanNumeral';
import { lcscostadev } from '../assets';
import { Desc } from './index';

const About = () => {

    const aboutLink = navLinks.find(link => link.id === 'about');
    const romanNumeral = toRomanNumeral(1);

    return (
        <>
            <section id='about' className='h-[100vh] max-w-[1440px] m-auto p-10'>
                <div className='flex items-center gap-2'>
                    <span className='text-[#00ff7f] text-2xl'>{`${romanNumeral}.`}</span>
                    <h1 className='text-3xl text-white'>{aboutLink.title}</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <Desc text="I consider myself a dedicated person, who doesn't like to be stagnant at the same level, who likes to stand out and wants to offer the best possible, I will always be an apprentice so I will always strive." subtext="At the moment my focus is development with React and Tailwind, which are the ones I use daily to create my projects. In addition to seeking to be a Full-Stack professional and mastering other technologies." />
                    <div className='flex flex-col items-center justify-center'>
                        <img src={lcscostadev} alt="" className='max-w-[420px]' />
                        <p>tests</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;