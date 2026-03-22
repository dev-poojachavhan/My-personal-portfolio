import React from 'react'
import { Navbar } from '../UI/Navbar'

export const Header = () => {
  return (
    <>
      <div className='h-20 w-full bg-gray-900 text-white border-b border-gray-700 layout-container'>
        <Navbar/>
      </div>
    </>
  )
}
