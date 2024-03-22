import React, { useState, useEffect } from 'react';
import QuillAudits from "../images/image.png";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [backgroundColor, setBackgroundColor] = useState('#061344');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBackgroundColor('#15306F');
            } else {
                setBackgroundColor('#061344');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ backgroundColor }} className='w-full flex justify-center py-4 items-center fixed top-0'>
            <section className='flex w-[80%] justify-between items-center  border-b-[0.15rem] border-[#b6b6be] border-opacity-20  pb-4'>
                <div className='w-[15%]'>
                    <Link to={'/'}>
                    <img className='w-40 h-9' src={QuillAudits} alt="" />
                    </Link>
                </div>
                <div className=' w-1/2'>
                    <ul className='flex justify-evenly font-jost text-slate-200'>
                        <li className=''>Services</li>
                        <li className=''>Pricing</li>
                        <li className=''>Our Audits</li>
                        <li className=''>Tools</li>
                        <li className=''>Resources</li>
                        <li className=''>Refer-Earn-Secure</li>
                    </ul>
                </div>
                <div className='w-[15%]'>
                    <button className='bg-gradient-to-r font-jost font-normal text-sm from-[#4D3FEE] to-[#7184FD] w-full py-3 rounded-lg text-white'>Request An Audit</button>
                </div>
            </section>
        </header>
    );
};

export default NavBar;
