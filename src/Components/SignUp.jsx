import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useState } from 'react'

function SignUp({ data, setData }) {

  const [passwordEye, setPasswordEye] = useState(false)
  const [cpasswordEye, setCpasswordEye] = useState(false)

  //Handle Password Eye
  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye)
  }
  //Handle Confrim Password Eye
  const handleCpasswordEye = () => {
    setCpasswordEye(!cpasswordEye)
  }
  return (
    <div className='space-y-6'>
      {/*UserName Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Username</label>
        <input
          onChange={(e) => setData({ ...data, username: e.target.value })}
          value={data.username}

          type="text" id='username' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
      </div>
      {/*Email Section*/}
      <div className='mt-1'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Email</label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}

          type="email" id='email' className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
      </div>
      {/*Password Section*/}
      <div className='mt-1 relative'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Password</label>
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
          type={passwordEye === false ? 'password' : 'text'}
          id='password'
          className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
        <div className='text-xl absolute top-10 right-2 cursor-pointer'>
          {passwordEye === false ? (<AiFillEyeInvisible
            onClick={handlePasswordEye}
          />) : (
            <AiFillEye onClick={handlePasswordEye} />)}

        </div>
      </div>
      {/*Confrim password Section*/}
      <div className='mt-1 relative'>
        <label className='block text-sm font-medium text-gray-700 pb-2'>Confrim Password</label>
        <input
          onChange={(e) => setData({ ...data, Cpassword: e.target.value })}
          value={data.Cpassword}
          type={cpasswordEye === false ? 'password' : 'text'}
          id='Cpassword' 
          className='block h-10 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' />
        <div className='text-xl absolute top-10 right-2 cursor-pointer'>
          {cpasswordEye === false ? (<AiFillEyeInvisible
            onClick={handleCpasswordEye}
          />) : (
            <AiFillEye onClick={handleCpasswordEye} />)}

        </div>
      </div>

    </div>
  )
}

export default SignUp
