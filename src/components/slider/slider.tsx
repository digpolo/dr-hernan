import React from 'react'
import ImgSlider from './img-slider'
import { IoIosArrowForward } from 'react-icons/io';

const Slider = () => {
  return (
    <div className='flex flex-col  justify-between mx-4 text-center'>
      <h2 className='py-10 font-semibold text-[30px]'>Más de 10 años creando sonrisas</h2>
      <a className=' flex justify-center items-center gap-2 text-blue '>
        <p className='text-center text-blue font-[16px]'>Agenda tu cita</p>
        <IoIosArrowForward className=' w-5 h-5' />
      </a>
      <ImgSlider />
    </div >

  )
}

export default Slider