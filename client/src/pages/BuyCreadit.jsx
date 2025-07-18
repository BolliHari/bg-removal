import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCreadit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='px-8 py-2 border rounded-full border-gray-600 mb-6'>Our Plans</button>
      <p className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</p>
      <div className="flex flex-wrap gap-6 justify-center text-left">
        {plans.map((item,index) =>(
            <div className='bg-white drop-shadow-md px-8 py-12 rounded-lg text-gray-700 hover:scale-105 transition-all duration-500' key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-5'>
                <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} Credits
              </p>
              <button className='w-full bg-gray-800 text-white text-sm py-2 min-w-52 mt-5 rounded'>Purchase</button>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default BuyCreadit
