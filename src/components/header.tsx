import React from 'react'
import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import logoBrasil from '../../public/logo-brasil.svg'
import NavBar from './nav-bar'
import { IoIosArrowForward } from 'react-icons/io';

const Header = () => {
    return (
        <section className='h-screen '>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-autoflex items-center'>
                <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
                    <div className='p-4 sm:p-8 w-full text-center'>
                        <ul className='py-6 font-extralight text-[16px]  '>
                            <li className='py-2'>Diseño de sonrisa</li>
                            <li className='py-2'>Rehabilitación Oral</li>
                            <li className='py-2'>Blanqueamiento dental</li>
                        </ul>

                        <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' flex justify-center gap-2 text-blue' target="_blank">
                            <p className='text-center text-blue font-[16px]'>Agenda tu cita</p>
                            <div className='mt-1'>
                            <IoIosArrowForward className=' w-5 h-5 ' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-span-1 sm:h-[calc(100vh-100px)] flex items-center">
                    <div className="flex flex-col flex-start justify-center  md:pt-0 lg:p-24">
                        <Image
                            src={profile}
                            alt="Fotografia dr hernan jojoa"
                            className="object-contain max-h-full w-full float-left"
                            width={2000}
                            height={2000}
                        />
                        <div className='flex flex-col flex-start my-6 mx-4 md:mx-0'>
                            <span className='font-extralight text-xs'>Odontólogo, Universidad Autónoma de Manizales</span>
                            <div className='flex items-center'>
                                <span className='font-extralight text-xs py-2'>Especializádo en Brasil</span>
                                <Image
                                    src={logoBrasil}
                                    alt="bandera de brasil"
                                    className="object-contain mx-6"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header


