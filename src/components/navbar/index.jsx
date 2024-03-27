import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Popover } from '@headlessui/react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    return (
        <nav className='w-full h-24 shadow-lg'>
            <div className='flex justify-between items-center py-[16px] px-[60px]'>
                <div className=''>
                    <img className='w-[60px] h-[60px] rounded-full cursor-pointer' src="img/logo.svg" alt="" />
                </div>
                <div className='flex items-center'>
                    <ul className='flex gap-10 pt-4 '>
                        <li className='hover:border-b hover:border-black transition-all'><a href="/home">Home</a></li>
                        <li className='hover:border-b hover:border-black transition-all'><a href="/about">About</a></li>
                        <li className='hover:border-b hover:border-black transition-all'>
                            <a className='flex items-center' href="/blog">
                                <Popover>
                                    <Popover.Button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                                        Blog
                                        {isOpen ? <FontAwesomeIcon className='px-[5px]' icon={faAngleUp} /> : <FontAwesomeIcon className='px-[5px]' icon={faAngleDown} />}
                                    </Popover.Button>
                                    <Popover.Panel className="relative ">
                                        <ul className='absolute -left-6 w-[108px] h-auto mt-1 bg-[#13829B] text-white py-[6px] px-2.5'>
                                            <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                            <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                            <li className='border-b hover:bg-white hover:text-black transition-all px-1'><a href="/">Blog</a></li>
                                            <li className='border-b hover:bg-white hover:text-black transition-all px-1'>
                                                <a href="/">
                                                    <Popover>
                                                        <Popover.Button onClick={() => setIsSecondOpen(!isSecondOpen)} className="w-full flex justify-between items-center focus:outline-none ">
                                                            Blog
                                                            {isSecondOpen ? <FontAwesomeIcon icon={faAngleLeft} /> : <FontAwesomeIcon icon={faAngleRight} />}
                                                        </Popover.Button>
                                                        <Popover.Panel>
                                                            <ul className='absolute left-[108px] top-[76px] w-[108px] h-auto mt-1 bg-[#13829B] text-white py-[6px] px-2.5'>
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
                        <li className='hover:border-b hover:border-black transition-all'><a href="/contact-us">Contact Us</a></li>
                    </ul>
                    <div className='px-5 pt-2 flex items-center gap-2'>
                        <input className='max-w-[200px] w-full py-1 px-2 rounded-lg bg-slate-200' type="text" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className='flex pl-10 gap-5'>
                        <button className='px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Log in</button>
                        <button className='px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
