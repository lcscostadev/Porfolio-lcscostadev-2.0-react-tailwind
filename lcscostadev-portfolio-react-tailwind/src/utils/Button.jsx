import React from 'react';

const Button = ({ text, onClick, icon }) => {
    return (
        <>
            <button onClick={onClick} className='text-[#00ff7f] border-[1px] py-2 px-4 rounded-lg border-[#00ff7f] flex items-center gap-2 hover:bg-[#00ff800d] transition ease-in-out duration-300'>{text} {icon}</button>
        </>
    );
}

export default Button;