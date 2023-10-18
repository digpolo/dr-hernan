import React from 'react'
import Image from 'next/image'
import case1a from '../../../public/case1a.jpg'
import case1d from '../../../public/case1d.jpg'
import case1f from '../../../public/case1f.jpg'

const ImgSlider1 = () => {
  return (

    <div className='flex justify-center gap-3 lg:px-40 py-10'>
      <div className='flex flex-col items-start'>
        <Image alt='Sonrisa antes del tratamiento' src={case1a} width={280} height={0} />
        <span className='font-extralight'>Antes</span>
        <Image alt='Sonrisa despues del tratamiento' src={case1d} width={280} height={0} />
        <span className='font-extralight'>Despues</span>
      </div>
      <div className='flex'>
        <Image alt='Sonrisa despues del tratamiento' src={case1f} width={280} height={0} />
      </div>
    </div>
  )
}

export default ImgSlider1