import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center py-10'>
        <Image alt='logo hernan jojoa' src={logo}/>
    </div>
  )
}

export default NavBar