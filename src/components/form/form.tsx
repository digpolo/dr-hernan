import React from 'react'
import Input from '../slider/input'
import TextArea from '../slider/text-area'

const Form = () => {
  return (
    <div className='flex flex-col  justify-between  mx-4 mx-auto max-w-xl px-4'>
      <h2 className='py-10 font-semibold text-[30px]'>Cuéntanos cómo podemos ayudarte</h2>
      <TextArea label='Motivo de consulta' placeholder='Mi motivo de consulta es...' />
      <Input label='Nombre y apellido' placeholder='Nombre y apellido' />
      <Input label='Email' placeholder='Email' />
      <Input label='Celular' placeholder='Celular' />
      <div className='flex gap-4'>
        <input
          id="comments"
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <label>Me gustaria registrarme con mi dirección de correo eléctronico para recibir el boletín  de Dr. Hernan Jojoa con actualizaciones, recursos valiosos y consejos útiles.</label>
      </div>
      <button className='bg-[#333333] py-4 rounded-lg my-14 font-medium text-lg  py-10'>
        Agendar cita 
      </button>
    </div>
  )
}

export default Form