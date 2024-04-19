import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { FaClockRotateLeft } from 'react-icons/fa6';
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import tempImage from '../assets/imageData2.png';

const Build = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1 '>
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
                    <div className='ml-10 mt-8 flex'>
                        <button className='rounded border-2 w-16 border-gray-300 mr-4'>Filter</button>
                        <button className='rounded border-2 w-16 border-gray-300 mr-6'>Sort</button>
                        <div className='flex justify-center items-center mr-4'>
                            <input type="checkbox" id='groundTruth' className='size-4 mr-2' />
                            <label htmlFor="groundTruth">Ground Truth</label>
                        </div>
                        <div className='flex justify-center items-center'>
                            <input type="checkbox" id='prediction' className='size-4 mr-2' />
                            <label htmlFor="prediction">Prediction</label>
                        </div>
                    </div>
                    <div className='ml-10    flex flex-wrap'>
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                        <img src={tempImage} alt="" className='flex h-48 rounded mr-6 mt-6 hover:outline hover:outline-offset-4' />
                    </div>
                </div>
                <div className='border-2 border-gray-300 w-96 '>
                    <div className='flex justify-between m-4 mb-2 text-gray-500'>
                        <h2>Model</h2>
                        <IoClose />
                    </div>
                    <div className='flex justify-between ml-4 mr-4'>
                        <h2 className='font-medium'>Model-01-30-2024_1</h2>
                        <BsThreeDots />
                    </div>
                    <div className='border border-black mt-2 h-96 flex flex-col justify-between'>
                        <h2>Graph</h2>
                        <div className='flex justify-end mr-10'>
                            <button className='m-2 rounded border-2 w-20 border-blue-400 text-blue-900'>Deploy</button>
                            <button className='m-2 rounded border-2 w-20 border-blue-400 bg-blue-700 text-white'>Predict</button>
                        </div>
                    </div>
                    <div>
                        <h2 className='m-2 text-gray-600 font-medium'>Performance</h2>
                        <div className='flex justify-center items-center space-x-20 mt-8'>
                            <div>
                                <h2 className='font-bold text-3xl'>83%</h2>
                                <h3 className='text-gray-600'>Precision</h3>
                            </div>
                            <div>
                                <h2 className='font-bold text-3xl'>88%</h2>
                                <h3 className='text-gray-600'>Recall</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Build