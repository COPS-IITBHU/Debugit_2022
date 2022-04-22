import React from 'react'
import art from './712.png'
import { NavLink } from 'react-router-dom'

const Root = () => {
  return (
    <div className='bg-yellow-100 h-[100vh] flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center border-b-black border-b-[1px]'>
            <img src={art} alt='cycle' className='w-[200px] p-2'></img>
            <p className='text-yellow-900 text-5xl font-logo p-2'>SecondCycle</p>
        </div>
        <div className='m-2 w-[300px] h-[200px] bg-[#daad86]/50 p-4 rounded-lg text-xl font-body flex flex-col items-center justify-around'>
            <p><b>Welcome!</b></p>
            <NavLink to='/front' className='rounded-lg p-2 bg-orange-700/20 hover:border-black hover:border-[1px] hover:scale-110 duration-300'>Continue</NavLink>
        </div>
    </div>
  )
}

export default Root