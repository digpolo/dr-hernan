import React from 'react'
import ImgSlider from './img-slider'
import { IoIosArrowForward } from 'react-icons/io';
import { CarouselDefault } from './carousel';

const Slider = () => {
  return (
    <div className='flex flex-col justify-between mx-4 text-center'>
      <h2 className='py-10 font-semibold text-[30px]'>Más de 10 años creando sonrisas</h2>
      <a href='https://wa.me/573102627887?text=Hola,%20deseo%20agendar%20una%20cita' className=' flex justify-center items-center gap-2 text-blue' target="_blank">
        <p className='text-center text-blue font-[16px]'>Agenda tu cita</p>
        <div className='mt-1'>
        <IoIosArrowForward className=' w-5 h-5' />
        </div>
      </a>
      <CarouselDefault/>
    </div >

  )
}

export default Slider