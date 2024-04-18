import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { FaClockRotateLeft } from 'react-icons/fa6';
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCloudUpload } from "react-icons/md";

const Build = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1'>
                    <div className='flex-1 flex  h-16 '>
                        <div className='ml-10 mt-8 text-3xl font-medium flex-1'>Build</div>
                        <div className='mt-10 mr-10 flex space-x-4 justify-content items-center'>
                            <div className='pl-1 size-6 border border-gray-400 h-6 w-6 rounded flex justify-content items-center'>
                                <BsThreeDots />
                            </div>
                            <div className='pl-1  border border-gray-400 h-6 w-6 rounded flex justify-content items-center'>
                                <FaClockRotateLeft className='size-4' />
                            </div>
                            <div className='pl-1  border border-gray-400 h-6 w-6 rounded flex justify-content items-center'>
                                <MdOutlineCloudUpload className='size-4' />
                            </div>
                            <div>
                                <button className='bg-blue-700 text-white rounded w-20 h-6'>Train</button>
                            </div>
                        </div>
                    </div>
                    <div className='m-32'>Images</div>
                </div>
                <div className='border w-96 '>
                    chart
                </div>
            </div>
        </>
    )
}

export default Build