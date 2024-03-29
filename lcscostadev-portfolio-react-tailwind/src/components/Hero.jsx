import React from 'react';
import { Button } from './index';

const Hero = () => {
    return (
        <>
            <main className='h-[100vh] max-w-[1440px] m-auto bg-[#1F1F23] flex justify-center flex-col text-white p-10'>
                <div className='flex items-center gap-2'>
                    <lord-icon
                        className="bg-white"
                        src="https://cdn.lordicon.com/wluyqhxh.json"
                        trigger="loop"
                        colors="primary:#00ff7f"
                        delay="1000"
                        style={{ width: '30px', height: '30px' }}>
                    </lord-icon>
                    {/* make appear letter by letter */}
                    <div className='text-[#00ff7f]'>Hello, World!</div>
                </div>
                <div className='flex gap-3 flex-col '>
                    <h1 className='text-6xl font-SourceSansPro font-bold md:text-7xl lg:text-8xl'>Hi🖖🏻, Im Lucas! </h1>
                    <h3 className='text-2xl'>Im a <span className='text-[#00ff7f] underline'>Full-Stack MERN Developer</span>.</h3>
                    <p className='max-w-[750px] text-lg text-[#e3ece7]'>Im 23 years old and im a Computer Science student, I recognize myself as an enthusiast in current market technologies, always looking to learn and be better, I see my evolution daily.</p>
                    <div className='flex'>
                        <Button text="Contact me!" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Hero;