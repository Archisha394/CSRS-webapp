import React from 'react'

const Login = () => {
    return (
        <div className='login container flex justify-center flex-col items-center bg-sky-100 '>
            <h1 className='text-3xl font-bold  text-teal-400'> Please Login</h1>
            <form className='w-2/5 m-10 p-5 bg-slate-400 rounded-md py-10 flex-col justify-center flex '>
            <div className='Name m-2 flex justify-start flex-col p-1'>
                    <label htmlFor='Name' className='font-semibold text-lg text-slate-700'>Name</label>
                    <input type='text' id='name' placeholder='Enter Name' className='w-full p-2 my-2 rounded-sm' />
                </div> 
                <div className='password m-2 flex justify-start flex-col p-1'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter Password' className='w-full p-2 my-2 rounded-sm' />
                </div>
                <div className='password m-2 flex justify-start flex-col p-1'>
                <button type='submit' className=' rounded-sm px-3 py-1 m-auto font-semibold text-lg bg-green-300 border-amber-200 w-min '>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;