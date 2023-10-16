import React from 'react'
import Image from 'next/image'
import case2a from '../../../public/case2a.jpg'
import case2d from '../../../public/case2d.jpg'
import case2p from '../../../public/caso2p.jpg'

const ImgSlider = () => {
  return (
    
      <div className='flex justify-center gap-3 lg:px-40 py-10'>
        <div className='flex flex-col items-start'>
          <Image alt='Sonrisa antes del tratamiento' src={case2a} width={280} height={0} />
          <span className='font-extralight'>Antes</span>
          <Image alt='Sonrisa despues del tratamiento' src={case2d} width={280} height={0} />
          <span className='font-extralight'>Despues</span> 
        </div>
        <div className='flex'>
          <Image alt='Sonrisa despues del tratamiento' src={case2p} width={280} height={0} />
        </div>
      </div>
  )
}

export default ImgSlider