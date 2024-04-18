import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { BiSolidNetworkChart } from "react-icons/bi";

const Sidebar = () => {
    return (
        <div className='bg-sky-100 w-20 h-screen'>
            <ul className='text-neutral-600 '>
                <li className='flex flex-col justify-center items-center my-2 hover:text-blue-900  hover:bg-blue-200 h-20'>
                    <NavLink to={'/build'} activeStyle={{ color: 'blue', backgroundColor: 'lightblue' }} className='flex flex-col justify-center items-center'>
                        <FontAwesomeIcon id='build' icon={faScrewdriverWrench} className='size-6 mb-2' />
                        <label htmlFor="build">Build</label>
                    </NavLink>
                </li>
                <li className='flex flex-col justify-center items-center my-2 hover:text-blue-900  hover:bg-blue-200 h-20'>
                    <NavLink to={'/models'} activeClassName='bg-red-200 text-blue-900' className='flex flex-col justify-center items-center'>
                        {/* <FontAwesomeIcon id='build' icon={faAtom} className='size-6 mb-2' /> */}
                        <BiSolidNetworkChart id='build' className='size-8'/>
                        <label htmlFor="build">Models</label>
                    </NavLink>
                </li>
                <li className='flex flex-col justify-center items-center my-2 hover:text-blue-900  hover:bg-blue-200 h-24'>
                    <FontAwesomeIcon id='build' icon={faCube} className='size-6 mb-2' />
                    <label htmlFor="build" className='pl-4'>Classic Models</label>
                </li>
                <li className='flex flex-col justify-center items-center my-2 hover:text-blue-900  hover:bg-blue-200 h-20'>
                    <FontAwesomeIcon id='build' icon={faRocket} className='size-6 mb-2' />
                    <label htmlFor="build">Deploys</label>
                </li>
                <li className='flex flex-col justify-center items-center my-2    hover:text-blue-900  hover:bg-blue-200 h-20'>
                    <FontAwesomeIcon id='build' icon={faListCheck} className='size-6 mb-2 ' />
                    <label htmlFor="build">Tasks</label>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar