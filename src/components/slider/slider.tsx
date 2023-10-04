import React from 'react'
import ImgSlider from './img-slider'

const Slider = () => {
  return (
    <div className='flex flex-col  justify-between  mx-4'>
      <h2 className='py-10 font-semibold text-[30px]'>Más de 10 años creando sonrisas</h2>
      <ImgSlider />
    </div>

  )
}

export default Slider