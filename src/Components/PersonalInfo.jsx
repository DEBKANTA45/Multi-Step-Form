import React from 'react'

function PersonalInfo({data, setData}) {
  return (
    <div className='space-y-6'>
      {/*Frist Name Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Frist Name</label>
        <input
         onChange={(e) => setData({...data, fristname: e.target.value})}
         value = {data.fristname}
        type="text" id='fristname' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
      </div>
      {/*Last name Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>last Name</label>
        <input 
         onChange={(e) => setData({...data, lastname: e.target.value})}
         value = {data.lastname}
        type="text" id='lastname' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
      </div>
      {/*Address Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Address</label>
        <input
         onChange={(e) => setData({...data, address: e.target.value})}
         value = {data.address}
        type="text" id='address' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
      </div>
    </div>
  )
}

export default PersonalInfo
