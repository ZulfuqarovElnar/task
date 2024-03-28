import { faMinus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Slider from '../slider'

export default function Home() {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='py-[80px] pl-[80px]'>
                    <p className='text-[#13829B]'><FontAwesomeIcon icon={faMinus} /> GEORGESKETCH</p>
                    <div className='flex relative'>
                        <h1 className='text-[40px] py-8 pr-10 font-bold text-[#333] leading-14'>Lorem ipsum dolor sit amet, <span className='text-[#13829B]'>consectetur</span> adipiscing</h1>
                        <img className='absolute pt-28 text-[52px] right-24' src="img/Group 74.svg" alt="" />
                    </div>
                    <p className='pb-8'>Donation is one of the best ways to create impact in society. We help connect people who are in need with others who can help with the necessary supplies</p>
                    <div className='flex gap-14'>
                        <button className='px-8 py-2 rounded-lg text-[16px] text-white bg-[#13829B] hover:bg-[#18a3c2]'>Donate</button>
                        <div className='flex items-center gap-5'>
                            <button className='flex justify-center items-center rounded-full bg-[#FDE9C9]'><FontAwesomeIcon className='py-[16px] px-[20px] text-[#333]' icon={faPlay} /></button>
                            Learn More
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='absolute z-30 w-[233px] h-[233px] rounded-full border-8 border-white mt-[160px]' src="img/logo.svg" alt="" />
                    <Slider />
                </div>
            </div>
        </div>
    )
}
