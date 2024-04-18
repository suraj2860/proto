import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Home = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='m-60 ml-96 bg-black text-white h-20 w-40 flex justify-center items-center rounded-lg'>this is Home page</div>
            </div>
        </>

    )
}

export default Home