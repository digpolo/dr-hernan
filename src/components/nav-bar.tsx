import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center pb-8 pt-10 lg:p-2 '>
        <Image alt='logo hernan jojoa' src={logo} width={300} height={300}/>
    </div>
  )
}

export default NavBar