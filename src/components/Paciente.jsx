import { useState, useEffect } from 'react'

function Paciente () {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700'>
        Mascota: <span className='font-normal normal-case'>Lucy</span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Dueño / Dueña: <span className='font-normal normal-case'>Facundo Saavedra</span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Correo electronico: <span className='font-normal normal-case'>facusaavedrx@gmail.com</span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Fecha de alta: <span className='font-normal normal-case'>07/07/1998</span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Sintomas: <span className='font-normal normal-case'>Dolor de cabeza</span>
      </p>
    </div>
  )
}

export default Paciente
