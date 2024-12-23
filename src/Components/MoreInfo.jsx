import React from 'react'

function MoreInfo({data, setData}) {
  return (
    <div className='space-y-6'>
      {/*Frist Name Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Phone Number</label>
        <input
         onChange={(e) => setData({...data, phone: e.target.value})}
         value = {data.phone}
        type="number" id='phone' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
      </div>
      {/*Last name Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Tech Stack</label>
        <input
         onChange={(e) => setData({...data, techstck: e.target.value})}
         value = {data.techstck}
        type="text" id='techstack' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'/>
      </div>
     
    </div>
  )
}

export default MoreInfo
