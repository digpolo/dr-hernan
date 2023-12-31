import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex justify-center items-center pb-8 pt-10 lg:p-2 '>
      <Link href={'/'}>
        <Image alt='logo hernan jojoa' src={logo} width={300} height={300}/>
        </Link>
    </div>
  )
}

export default NavBar