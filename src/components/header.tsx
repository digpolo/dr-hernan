import React from 'react'
import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import NavBar from './nav-bar'

const Header = () => {
    return (
        <section className='h-screen '>
            <NavBar />
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-auto'>
                <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
                    <div className='p-4 sm:p-8 w-full'>
                        <ul className='py-6 font-extralight text-[16px] '>
                            <li className='py-1'>Diseño de sonrisa</li>
                            <li className='py-1'>Rehabilitación Oral</li>
                            <li className='py-1'>Blanqueamiento dental</li>
                        </ul>
                        <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className='text-blue py-6'>
                            Agendar cita
                        </a>
                    </div>
                </div>
                <div className="col-span-1 sm:h-[calc(100vh-100px)]">
                    <div className="h-full flex items-center justify-center pt-20 md:pt-0">
                        <Image
                            src={profile}
                            alt="Dueño de un negocio planificando sus compras por adelantado"
                            className="object-contain max-h-full w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Header


