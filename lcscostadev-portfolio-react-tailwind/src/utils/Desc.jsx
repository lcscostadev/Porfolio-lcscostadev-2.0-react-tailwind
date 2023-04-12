import React from 'react';

const Desc = ({ text, subtext }) => {
    return (
        <>
            <div className='flex flex-col gap-8 py-4 max-w-[450px] text-[#e3ece7] text-lg'>
                <p>{text}</p>
                <p>{subtext}</p>
            </div>
        </>
    );
}

export default Desc;