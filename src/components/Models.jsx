import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Models = () => {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1'>
                    <div className='ml-10 mt-8 text-3xl font-medium'>Models</div>
                    <div className='mt-12 w-full relative flex flex-wrap items-center justify-between'>
                        <input
                            type="text"
                            placeholder='Search by model name, creator'
                            className='border border-black w-80 ml-10 pl-2 box-border'
                        />
                        <div className='flex items-center'>
                            <input type="checkbox" id='favorite-models' className='mr-2 h-4 w-4' />
                            <label htmlFor="favorite-models" className='mr-4'>Only show favorite models</label>
                        </div>
                    </div>
                    <div class="flex flex-col ml-10 mt-6  mr-4">
                        <div class="-m-1.5 overflow-x-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                                <div class="border-2 overflow-hidden">
                                    <table class="min-w-full divide-y divide-x divide-gray-400 overflow-auto">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Model</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Train</th>
                                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Dev</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Test</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Parking Lots</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Rail Roads</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">cul de sac</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Confidence Threshold</th>
                                                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Deployment</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-x divide-gray-200">
                                            <tr className=''>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    <h2>Model 01-30-2024_1</h2>
                                                    <h4 className='text-xs text-gray-500'>Default Configuration</h4>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">0.02</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Deploy</button>
                                                </td>
                                            </tr>

                                            <tr className=''>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    <h2>Model 01-21-2024_1</h2>
                                                    <h4 className='text-xs text-gray-500'>Default Configuration</h4>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">0.88</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Deploy</button>
                                                </td>
                                            </tr>

                                            <tr className=''>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    <h2>Model 01-20-2024_1</h2>
                                                    <h4 className='text-xs text-gray-500'>Default Configuration</h4>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">0.32</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Deploy</button>
                                                </td>
                                            </tr>

                                            <tr className=''>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    <h2>Model 01-10-2024_1</h2>
                                                    <h4 className='text-xs text-gray-500'>Default Configuration</h4>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap  text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">##</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">0.62</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Deploy</button>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Models;
