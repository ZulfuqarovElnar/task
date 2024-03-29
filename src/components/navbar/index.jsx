import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faBars, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Popover } from '@headlessui/react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <nav className='w-full h-24 shadow-lg fixed bg-white z-50'>
            <div className='flex justify-between items-center py-[16px] px-[60px]'>
                <div >
                    <img className='w-[60px] h-[60px] rounded-full cursor-pointer' src="img/logo.svg" alt="" />
                </div>
                <div className='flex items-center'>
                    <div className={`lg:flex lg:flex-row lg:relative lg:w-auto lg:top-0 lg:h-auto lg:bg-transparent lg:shadow-none lg:overflow-visible w-full bg-white flex flex-col shadow-box fixed left-0 z-40 top-[90px] transition-all duration-300 overflow-hidden  ${menuVisible ? 'h-auto' : ' h-0'}`}>
                        <ul className='lg:flex-row lg:flex lg:gap-6 lg:px-0 lg:pt-6 flex flex-col py-6 pt-6 px-10 gap-3'>
                            <li className='lg:hover:border-b lg:hover:border-black border-0 transition-all'><a href="/home">Home</a></li>
                            <li className='lg:hover:border-b lg:hover:border-black border-0 transition-all'><a href="/about">About</a></li>
                            <li className='lg:hover:border-b lg:hover:border-black border-0 transition-all'>
                                <a className='flex items-center' href="/blog">
                                    <Popover>
                                        <Popover.Button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                                            Blog
                                            {isOpen ? <FontAwesomeIcon className='px-[5px]' icon={faAngleUp} /> : <FontAwesomeIcon className='px-[5px]' icon={faAngleDown} />}
                                        </Popover.Button>
                                        <Popover.Panel className="relative ">
                                            <ul className='lg:absolute relative -left-6  w-[108px] h-[115px] mt-1 bg-[#13829B] text-white py-[6px] px-2.5 '>
                                                <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                <li className='border-b hover:bg-white hover:text-black transition-all px-1'>
                                                    <a href="/">
                                                        <Popover>
                                                            <Popover.Button onClick={() => setIsSecondOpen(!isSecondOpen)} className="w-full flex justify-between items-center focus:outline-none ">
                                                                Blog
                                                                {isSecondOpen ? <FontAwesomeIcon className='pt-1' icon={faAngleLeft} /> : <FontAwesomeIcon className='pt-1' icon={faAngleRight} />}
                                                            </Popover.Button>
                                                            <Popover.Panel>
                                                                <ul className='absolute left-[108px] top-[76px] w-[108px] mt-1 bg-[#13829B] text-white py-[6px] px-2.5'>
                                                                    <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                                    <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                                    <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                                                </ul>
                                                            </Popover.Panel>
                                                        </Popover>
                                                    </a>
                                                </li>
                                            </ul>
                                        </Popover.Panel>
                                    </Popover>
                                </a>
                            </li>
                            <li className='lg:hover:border-b lg:hover:border-black border-0 transition-all'><a href="/contact-us">Contact Us</a></li>
                        </ul>
                        <div className='px-10 flex md:hidden items-center gap-2'>
                            <input placeholder='Search' className='max-w-[200px] w-full py-1 px-2 rounded-lg bg-slate-200' type="text" />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <div className='flex px-10 py-6 md:hidden gap-5'>
                            <button className='flex px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Log in</button>
                            <button className='flex px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Sign up</button>
                        </div>
                    </div>
                    
                    <div className='px-5 hidden md:flex items-center gap-2'>
                        <input placeholder='Search' className='max-w-[200px] w-full py-1 px-2 rounded-lg bg-slate-200' type="text" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className='hidden md:flex md:pr-5 pl-5 gap-5'>
                        <button className='flex px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Log in</button>
                        <button className='flex px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Sign up</button>
                    </div>
                    <div className='flex lg:hidden transition-all duration-300 ease'> 
                        <FontAwesomeIcon
                            className={`text-[32px] text-[#767676] cursor-pointer ${menuVisible ? 'hidden' : ''}`}
                            icon={faBars}
                            onClick={toggleMenu}
                        />
                        <FontAwesomeIcon
                            className={`text-[32px] text-[#767676] cursor-pointer ${menuVisible ? '' : 'hidden'}`}
                            icon={faTimes}
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
